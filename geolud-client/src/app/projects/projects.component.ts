import {Component, OnInit} from '@angular/core';
import {ProjectService} from './project.service';
import {Project} from '../../generated-api/model/project';
import {Title} from '@angular/platform-browser';
import {AlertService} from '../core/alert/alert.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor(private projectService: ProjectService, private alertSerice: AlertService, title: Title) {
    title.setTitle('Georg Ludewig - Software Engineer - Projects');
  }

  ngOnInit(): void {
    this.projectService.getAll().subscribe((projects: Project[]) => {
      this.projects = projects;
    }, error => {
      this.alertSerice.addError('Failed to load project list !', error);
    }, () => {
    });
  }
}
