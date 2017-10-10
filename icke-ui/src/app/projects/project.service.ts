import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/catch';
import {Title} from "@angular/platform-browser";
import {Project} from "../../../generated-api/model/Project";

@Injectable()
export class ProjectService {

  constructor(private http: HttpClient, title: Title) {
    title.setTitle('Georg Ludewig - Software Engineer - Projects');
  }

  getAll(): Observable<Project[]> {
    return this.http.get<Project[]>(`api/v1/projects`);
  }

}
