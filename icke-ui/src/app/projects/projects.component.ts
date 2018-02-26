import {Component, OnInit} from '@angular/core';
import {ProjectService} from './project.service';
import {Project} from '../../generated-api/model/project';
import {BlockUI, NgBlockUI} from 'ng-block-ui';
import {Alert} from '../core/alert';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  feedback: Alert;
  projects: Project[];

  @BlockUI('project-list') blockUI: NgBlockUI;

  constructor(private projectService: ProjectService, title: Title) {
    title.setTitle('Georg Ludewig - Software Engineer - Projects');
  }

  ngOnInit(): void {
    this.blockUI.start('Loading...');
    this.projectService.getAll().subscribe((projects: Project[]) => {
      this.projects = projects;
    }, error => {
      this.feedback = <Alert>{
        type: 'danger',
        message: 'Failed to load project list !'
      };
      this.blockUI.stop();
    }, () => {
      this.blockUI.stop();
    });
  }

  public closeAlert() {
    this.feedback = null;
  }
}
