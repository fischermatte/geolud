import {Component, OnInit} from '@angular/core';
import {ProjectService} from "./project.service";
import {Project} from "../../../../icke-api/target/api/model/ts/project";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor(public projectService: ProjectService) {
  }

  ngOnInit() {
    this.projectService.getAll().subscribe((projects: Project[]) => {
      this.projects = projects;
    });
  }

}
