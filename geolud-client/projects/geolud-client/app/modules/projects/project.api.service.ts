import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project.types';
import { ProjectState } from './store/project.state';
import { Store } from '@ngrx/store';
import { FetchProjectsAction } from './store/project.actions';
import { environment } from '../../../environments/environment';
import { publishReplay, refCount } from 'rxjs/operators';

@Injectable()
export class ProjectApiService {
  private url: string = environment.appConfig.apiBase + `/api/projects`;

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.url);
  }
}
