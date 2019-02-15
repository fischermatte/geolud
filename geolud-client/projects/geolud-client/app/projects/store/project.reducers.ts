import {Project} from '../project.model';
import {PROJECT_ADD_ACTION, ProjectActionType} from './project.actions';

const initialState: Project[] = [];

export function ProjectReducer(state: Project[] = initialState, action: ProjectActionType) {
  switch (action.type) {
    case PROJECT_ADD_ACTION: {
      return [];
    }
    default: {
      return state;
    }
  }
}
