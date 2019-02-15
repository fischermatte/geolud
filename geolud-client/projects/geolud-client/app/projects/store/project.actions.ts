import {Action} from '@ngrx/store';
import {Project} from '../project.model';

export const ADD_ACTION = 'PROJECT_ADD_ACTION';
export const POPULATE_ACTION = 'PROJECT_POPULATE_ACTION';


export class AddProjectAction implements Action {
  readonly type = ADD_ACTION;

  constructor(
    public project: Project
  ) {
  }
}

export class PopulateProjectsAction implements Action {
  readonly type = POPULATE_ACTION;

  constructor(
    public projects: Project[]
  ) {}
}
