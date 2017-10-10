import {Component, OnInit} from '@angular/core';
import {ProjectService} from "./project.service";
import {ActivatedRoute} from "@angular/router";
import {Project} from "../../../generated-api/model/Project";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.projects = this.route.snapshot.data['projects'];
  }


}
