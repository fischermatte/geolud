import {Action} from '@ngrx/store';
import {Project} from '../project.model';

export const PROJECT_ADD_ACTION = 'PROJECT_ADD_ACTION';
export const PROJECT_POPULATE_ACTION = 'PROJECT_POPULATE_ACTION';


export class AddProjectAction implements Action {
  readonly type = PROJECT_ADD_ACTION;

  constructor(
    public project: Project
  ) {
  }
}

export class PopulateProjectsAction implements Action {
  readonly type = PROJECT_POPULATE_ACTION;

  constructor(
    public projects: Project[]
  ) {}
}

export type ProjectActionType  = AddProjectAction | PopulateProjectsAction;
