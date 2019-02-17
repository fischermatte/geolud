import { initialProjectState, projectAdapter, ProjectState } from './project.state';
import { ProjectAction, ProjectActionType } from './project.actions';

export function projectReducer(state: ProjectState = initialProjectState, action: ProjectAction): ProjectState {
  switch (action.type) {
    case ProjectActionType.ADD_PROJECT: {
      projectAdapter.addOne(action.project, state);
      return state;
    }
    case ProjectActionType.ADD_PROJECTS: {
      projectAdapter.addMany(action.projects, state);
      return state;
    }
    default: {
      return state;
    }
  }
}
