import {Injectable} from '@angular/core';
import {SwPush} from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  readonly VAPID_PUBLIC_KEY = 'BJRHDqvIYPUP_lqxIyrBgnsz4Shs-jnxVVYJCNKXmtuADgF9MfzpKx3cGnb6vf1wTR6yAm3vwuZyFndqmI0fmp8';


  constructor(private swPush: SwPush) {
  }

  init() {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    });
  }
}
