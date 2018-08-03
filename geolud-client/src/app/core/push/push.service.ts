import {Injectable} from '@angular/core';
import {SwPush} from '@angular/service-worker';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PushService {


  constructor(private swPush: SwPush, private http: HttpClient) {
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
      return this.http.post(environment.appConfig.apiBase + '/v1/push', subscription).subscribe(() =>
        console.log('registered for push'));
    }).catch(err => console.error('Could not subscribe to notifications', err));
  }

  unregister(): Promise<void> {
    // TODO
    return null;

  }
}
