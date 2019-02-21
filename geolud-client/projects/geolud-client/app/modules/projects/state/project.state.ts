import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Project } from '../project.types';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface ProjectState extends EntityState<Project> {
  loading: boolean;
}

export const projectAdapter: EntityAdapter<Project> = createEntityAdapter<Project>();

export const initialProjectState: ProjectState = projectAdapter.getInitialState({
  loading: false,
});

export const { selectAll: selectAllProjects } = projectAdapter.getSelectors();

export const selectProjectEntity = createFeatureSelector<ProjectState>('project');

export const isLoading = (state: ProjectState) => state.loading;

export const isProjectLoading = createSelector(
  selectProjectEntity,
  isLoading
);
