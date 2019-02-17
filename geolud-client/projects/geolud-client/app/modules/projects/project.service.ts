import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project.types';
import { ProjectState } from './store/project.state';
import { Store } from '@ngrx/store';
import { FetchProjectsAction } from './store/project.actions';

@Injectable()
export class ProjectService {
  projects: Observable<Project[]>;

  constructor(private http: HttpClient, private store: Store<ProjectState>) {
    this.projects = store.select('projects') as Observable<Project[]>;
    store.dispatch(new FetchProjectsAction());
  }
}
