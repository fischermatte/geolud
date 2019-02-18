import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Project } from '../project.types';

export interface ProjectState extends EntityState<Project> {
  loading: boolean;
}

export const projectAdapter: EntityAdapter<Project> = createEntityAdapter<Project>();

export const initialProjectState: ProjectState = projectAdapter.getInitialState({
  loading: false,
});

export const { selectAll: selectAllProjects } = projectAdapter.getSelectors();
