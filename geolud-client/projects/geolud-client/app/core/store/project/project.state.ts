import { Project } from '../../../projects/project.model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export interface ProjectState extends EntityState<Project> {}

export const projectAdapter: EntityAdapter<Project> = createEntityAdapter<Project>();

export const initialProjectState: ProjectState = projectAdapter.getInitialState({});
