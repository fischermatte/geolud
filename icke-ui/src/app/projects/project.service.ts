import {Injectable} from '@angular/core';
import {Project} from "../../../../icke-api/src/model/ts/project";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/catch';

@Injectable()
export class ProjectService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Project[]> {
    return this.http.get<Project[]>(`assets/projects.json`);
  }

}
