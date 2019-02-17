import { ActionReducerMap } from '@ngrx/store';
import { projectReducer } from './project/project.reducers';
import { ProjectState } from './project/project.state';

export interface State {
  projects: ProjectState;
}

export const reducers: ActionReducerMap<State> = {
  projects: projectReducer,
};
