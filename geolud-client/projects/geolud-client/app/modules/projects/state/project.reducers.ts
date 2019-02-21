import { initialProjectState, projectAdapter, ProjectState } from './project.state';
import { ProjectAction, ProjectActionType } from './project.actions';

export function projectReducer(state: ProjectState = initialProjectState, action: ProjectAction): ProjectState {
  switch (action.type) {
    case ProjectActionType.FETCH_PROJECTS: {
      state.loading = true;
      return state;
    }
    case ProjectActionType.FETCH_PROJECTS_SUCCEEDED: {
      state.loading = false;
      return projectAdapter.addMany(action.projects, state);
    }
    case ProjectActionType.FETCH_PROJECTS_FAILED: {
      state.loading = false;
      return state;
    }
    default: {
      return state;
    }
  }
}
