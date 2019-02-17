import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Project } from '../../../modules/projects/project.types';

export interface ProjectState extends EntityState<Project> {}

export const projectAdapter: EntityAdapter<Project> = createEntityAdapter<Project>();

export const initialProjectState: ProjectState = projectAdapter.getInitialState({});
