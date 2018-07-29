import {Injectable} from '@angular/core';
import {SwPush} from '@angular/service-worker';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  readonly VAPID_PUBLIC_KEY = 'BJRHDqvIYPUP_lqxIyrBgnsz4Shs-jnxVVYJCNKXmtuADgF9MfzpKx3cGnb6vf1wTR6yAm3vwuZyFndqmI0fmp8';

  constructor(private swPush: SwPush, private http: HttpClient) {
  }

  register() {

    // SUBSCRIBE for notifications
    this.swPush.messages.subscribe(message => {
      console.log('received message' + JSON.stringify(message));
    });

    // REGISTER BACKEND
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    }).then((subscription: PushSubscription) => {
      return this.http.post(environment.appConfig.apiBase + '/v1/push', {}).subscribe(() =>
        console.log('registered for push'));
    }).catch(err => console.error('Could not subscribe to notifications', err));
  }
}
