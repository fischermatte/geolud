import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project.types';
import { isProjectLoading, ProjectState, selectAllProjects } from './state/project.state';
import { select, Store } from '@ngrx/store';
import { FetchProjectsAction } from './state/project.actions';

@Injectable()
export class ProjectService {
  projects: Observable<Project[]>;

  constructor(private http: HttpClient, private store: Store<ProjectState>) {
    this.projects = store.select(selectAllProjects);
    store.dispatch(new FetchProjectsAction());
  }

  public isLoading(): Observable<boolean> {
    return this.store.pipe(select(isProjectLoading));
  }
}
