import { PROJECT_ADD_ONE_ACTION, PROJECT_ADD_MANY_ACTION, ProjectActionType } from './project.actions';
import { initialProjectState, ProjectState } from './project.state';

export function projectsReducer(state: ProjectState = initialProjectState, action: ProjectActionType): ProjectState {
  switch (action.type) {
    case PROJECT_ADD_ONE_ACTION: {
      state.projects.push(action.project);
      return state;
    }
    case PROJECT_ADD_MANY_ACTION: {
      state.projects.concat(action.projects);
      return state;
    }
    default: {
      return state;
    }
  }
}
