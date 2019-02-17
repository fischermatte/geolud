import { Action } from '@ngrx/store';
import { Notification } from '../notification.types';

export enum NotificationActionType {
  NOTIFICATION_SHOW_ERROR = '[NOTIFICATION] SHOW ERROR',
  NOTIFICATION_COMPLETED = '[NOTIFICATION] SHOWN',
}

export class NotificationShowErrorAction implements Action {
  readonly type = NotificationActionType.NOTIFICATION_SHOW_ERROR;
  constructor(public notification: Notification) {}
}

export class NotificationShownAction implements Action {
  readonly type = NotificationActionType.NOTIFICATION_COMPLETED;
  constructor() {}
}

export type NotificationAction = NotificationShowErrorAction | NotificationShownAction;
