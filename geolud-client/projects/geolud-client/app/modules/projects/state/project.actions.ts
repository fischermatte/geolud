import { Action } from '@ngrx/store';
import { Project } from '../project.types';

export enum ProjectActionType {
  FETCH_PROJECTS = '[PROJECT] FETCH PROJECTS',
  FETCH_PROJECTS_SUCCEEDED = '[PROJECT] FETCH PROJECTS SUCCEEDED',
  FETCH_PROJECTS_FAILED = '[PROJECT] FETCH PROJECTS FAILED',
}

export class FetchProjectsAction implements Action {
  readonly type = ProjectActionType.FETCH_PROJECTS;

  constructor() {}
}

export class FetchProjectsSucceededAction implements Action {
  readonly type = ProjectActionType.FETCH_PROJECTS_SUCCEEDED;

  constructor(public projects: Project[]) {}
}

export class FetchProjectsFailedAction implements Action {
  readonly type = ProjectActionType.FETCH_PROJECTS_FAILED;

  constructor(public error: any) {}
}

export type ProjectAction = FetchProjectsAction | FetchProjectsSucceededAction | FetchProjectsFailedAction;
