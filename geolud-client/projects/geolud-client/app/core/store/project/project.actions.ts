import { Action } from '@ngrx/store';
import { Project } from '../../../projects/project.model';

export const PROJECT_ADD_ONE_ACTION = '[PROJECT] ADD ONE';
export const PROJECT_ADD_MANY_ACTION = '[PROJECT] ADD MANY';

export class AddProjectAction implements Action {
  readonly type = PROJECT_ADD_ONE_ACTION;

  constructor(public project: Project) {}
}

export class AddProjectsAction implements Action {
  readonly type = PROJECT_ADD_MANY_ACTION;

  constructor(public projects: Project[]) {}
}

export type ProjectActionType = AddProjectAction | AddProjectsAction;
