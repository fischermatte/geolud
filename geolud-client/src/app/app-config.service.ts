import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {AppConfig} from './app-config';

@Injectable()
export class AppConfigService {

  constructor(private httpClient: HttpClient) {
  }


  loadConfig(): any {
    return this.httpClient.get('/app-config')
      .toPromise()
      .then((appConfig: AppConfig) => {
        environment.appConfig = appConfig;
        return appConfig;
      }).catch(error => {
        console.error('failed to load app config: ' + JSON.stringify(error));
      });
  }
}
