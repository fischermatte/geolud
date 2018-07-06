import {Inject, Injectable, Optional} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {AppConfig} from './app-config';
import {APP_BASE_HREF} from '@angular/common';

@Injectable()
export class AppConfigService {

  private url: string;

  constructor(private httpClient: HttpClient,
              @Optional() @Inject(APP_BASE_HREF) origin: string) {
    this.url = `${origin}/api/app-config`;
  }


  loadConfig(): any {
    return this.httpClient.get(this.url)
      .toPromise()
      .then((appConfig: AppConfig) => {
        environment.appConfig = appConfig;
        return appConfig;
      }).catch(error => {
        console.error('failed to load app config: ' + JSON.stringify(error));
      });
  }
}
