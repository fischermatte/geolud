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
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    }).then((subscription: PushSubscription) => {
      // this.http.post(environment.appConfig.apiBase + '/v1/push', subscription);
    }).catch(err => console.error('Could not subscribe to notifications', err));
  }
}
