import { Action } from '@ngrx/store';
import { Project } from '../../../modules/projects/project.types';

export enum ProjectActionType {
  ADD_PROJECT = '[PROJECT] ADD PROJECT',
  ADD_PROJECTS = '[PROJECT] ADD PROJECTS',
}

export class AddProjectAction implements Action {
  readonly type = ProjectActionType.ADD_PROJECT;

  constructor(public project: Project) {}
}

export class AddProjectsAction implements Action {
  readonly type = ProjectActionType.ADD_PROJECTS;

  constructor(public projects: Project[]) {}
}

export type ProjectAction = AddProjectAction | AddProjectsAction;
