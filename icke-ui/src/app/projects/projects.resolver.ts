import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/catch';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {ProjectService} from "./project.service";
import {Observable} from "rxjs/Observable";
import {Project} from "../../../generated-api/model/Project";

@Injectable()
export class ProjectsResolver implements Resolve<Project[]> {
  private projects: Project[];

  constructor(public projectService: ProjectService) {
  }

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    let projectsPublisher = this.projectService.getAll();
    projectsPublisher.subscribe((projects: Project[]) => {
      this.projects = projects;
    });
    return projectsPublisher;
  }
}
