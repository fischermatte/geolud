import {Component, OnInit} from '@angular/core';
import {ProjectService} from "./project.service";
import {Project} from "../../../generated-api/model/Project";
import {BlockUI, NgBlockUI} from "ng-block-ui";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  @BlockUI('project-list') blockUI: NgBlockUI;

  constructor(private projectService: ProjectService) {
  }

  ngOnInit(): void {
    this.blockUI.start('Loading...');
    this.projectService.getAll().subscribe((projects: Project[]) => {
      this.projects = projects;
      this.blockUI.stop();
    });
  }
}
