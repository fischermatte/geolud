import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { NotificationShowErrorAction, NotificationShownAction, NotificationActionType } from './notification.actions';
import { of, pipe } from 'rxjs';

@Injectable()
export class NotificationEffects {
  constructor(private actions: Actions, private toastrService: ToastrService) {}

  @Effect()
  showErrorNotification = this.actions.pipe(
    ofType(NotificationActionType.NOTIFICATION_SHOW_ERROR),
    mergeMap((action: NotificationShowErrorAction) => {
      this.toastrService.error(action.notification.message, action.notification.title);
      return of(new NotificationShownAction());
    }),
  );
}
