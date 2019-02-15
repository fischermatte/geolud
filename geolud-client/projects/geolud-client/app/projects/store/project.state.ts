import {Project} from '../project.model';

export interface ProjectState {
  loading: boolean;
  loaded: boolean;
  projects: Project[];
}

export const initializeState = (): ProjectState => {
  return ({
    loading: true,
    loaded: false,
    projects: []
  });
};
