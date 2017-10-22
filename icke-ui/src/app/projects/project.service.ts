import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/catch';
import {Project} from "../../../generated-api/model/Project";
import {environment} from "../../environments/environment";

@Injectable()
export class ProjectService {
  private projects: Project[];

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Project[]> {
    if (!this.projects) {
      let publisher = this.http.get<Project[]>(environment.apiBase + `/projects`);
      publisher.subscribe((projects: Project[]) => {
        this.projects = projects;
      });
      return publisher;
    } else {
      return Observable.of(this.projects);
    }
  }

}
