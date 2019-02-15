import {Project} from '../../../projects/project.model';

export interface ProjectState {
  projects: Project[];
}

export const initialProjectState: ProjectState = {
  projects: [],
};
