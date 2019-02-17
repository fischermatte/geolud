import { initialProjectState, projectAdapter, ProjectState } from './project.state';
import { ProjectAction, ProjectActionType } from './project.actions';

export function projectReducer(state: ProjectState = initialProjectState, action: ProjectAction): ProjectState {
  switch (action.type) {
    case ProjectActionType.FETCH_PROJECTS: {
      return state;
    }
    case ProjectActionType.FETCH_PROJECTS_SUCCEEDED: {
      return projectAdapter.addMany(action.projects, state);
    }
    case ProjectActionType.FETCH_PROJECTS_FAILED: {
      return state;
    }
    default: {
      return state;
    }
  }
}
