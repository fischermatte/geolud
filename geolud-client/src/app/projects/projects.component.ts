import {Component, OnInit} from '@angular/core';
import {ProjectService} from './project.service';
import {Project} from '../../generated-api/model/project';
import {BlockUI, NgBlockUI} from 'ng-block-ui';
import {Title} from '@angular/platform-browser';
import {AlertService} from '../core/alert/alert.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  @BlockUI('project-list') blockUI: NgBlockUI;

  constructor(private projectService: ProjectService, private alertSerice: AlertService, title: Title) {
    title.setTitle('Georg Ludewig - Software Engineer - Projects');
  }

  ngOnInit(): void {
    this.blockUI.start('Loading...');
    this.projectService.getAll().subscribe((projects: Project[]) => {
      this.projects = projects;
    }, error => {
      this.alertSerice.addError('Failed to load project list !', error);
      this.blockUI.stop();
    }, () => {
      this.blockUI.stop();
    });
  }
}
