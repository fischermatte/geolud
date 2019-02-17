import { Component, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Title } from '@angular/platform-browser';
import { Project } from './project.types';
import { ProjectService } from './project.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'geolud-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Observable<Project[]>;

  @BlockUI('project-list') blockUI: NgBlockUI;
  constructor(title: Title, private projectService: ProjectService) {
    title.setTitle('Georg Ludewig - Software Engineer - Projects');
    this.projects = this.projectService.projects;
  }

  ngOnInit(): void {
    // this.blockUI.start('Loading...');
    // this.projectService.getAll().subscribe(
    //   (projects: Project[]) => {
    //     this.projects = projects;
    //   },
    //   error => {
    //     this.alertSerice.addError('Failed to load project list !', error);
    //     this.blockUI.stop();
    //   },
    //   () => {
    //     this.blockUI.stop();
    //   },
    // );
  }
}
