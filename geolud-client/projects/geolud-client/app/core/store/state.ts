import { ActionReducerMap } from '@ngrx/store';
import { projectsReducer } from './project/project.reducers';
import { ProjectState } from './project/project.state';

export interface State {
  projectState: ProjectState;
}

export const reducers: ActionReducerMap<State> = {
  projectState: projectsReducer,
};
