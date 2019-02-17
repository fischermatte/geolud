import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { FetchProjectsFailedAction, FetchProjectsSucceededAction, ProjectActionType } from './project.actions';
import { ProjectApiService } from '../project.api.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { NotificationShowErrorAction } from '../../../core/notification/store/notification.actions';

@Injectable()
export class ProjectEffects {
  constructor(private actions: Actions, private api: ProjectApiService) {}

  @Effect()
  fetchProjects = this.actions.pipe(
    ofType(ProjectActionType.FETCH_PROJECTS),
    switchMap(() =>
      this.api.getProjects().pipe(
        map(projects => new FetchProjectsSucceededAction(projects)),
        catchError(error => of(new FetchProjectsFailedAction(error))),
      ),
    ),
  );

  @Effect()
  fetchProjectsFailed = this.actions.pipe(
    ofType(ProjectActionType.FETCH_PROJECTS_FAILED),
    map(() => {
      return new NotificationShowErrorAction({
        message: 'Failed to load projects list',
      });
    }),
  );
}
