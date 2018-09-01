import {Injectable} from '@angular/core';
import {SwPush} from '@angular/service-worker';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Subscription} from 'rxjs';

class PushRegistration {
  endpoint: string;
  p256dh: string;
  auth: string;

  constructor(pushSubscription: PushSubscription) {
    this.endpoint = pushSubscription.endpoint;
    const json: any = pushSubscription.toJSON();
    this.p256dh = json.keys.p256dh;
    this.auth = json.keys.auth;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PushService {

  private endpoint: string;

  constructor(private swPush: SwPush, private http: HttpClient) {
    this.endpoint = environment.appConfig.apiBase + '/v1/push';
  }

  register(): Promise<void | Subscription> {

    // SUBSCRIBE for notifications
    this.swPush.messages.subscribe(message => {
      console.log('received message' + JSON.stringify(message));
    });

    // REGISTER BACKEND
    return this.swPush.requestSubscription({
      serverPublicKey: environment.appConfig.vapidPulicKey
    }).then((subscription: PushSubscription) => {
      console.log('register for push at ' + this.endpoint);
      return this.http.post(this.endpoint, new PushRegistration(subscription)).subscribe(() =>
        console.log('registered for push'));
    });
  }

  unregister(): Promise<void> {
    return this.swPush.unsubscribe().then(() => {
      console.log('unregistered from push');
    });
  }
}
