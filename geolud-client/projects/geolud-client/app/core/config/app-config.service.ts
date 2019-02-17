import { APP_INITIALIZER, Injectable, Provider } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AppConfig } from './app-config';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  constructor(private httpClient: HttpClient) {}

  loadConfig(): any {
    return this.httpClient
      .get('/app-config')
      .toPromise()
      .then((appConfig: AppConfig) => {
        environment.appConfig = appConfig;
        return appConfig;
      })
      .catch(error => {
        console.error('failed to load app config: ' + JSON.stringify(error));
      });
  }
}

export const AppConfigServiceProvider: Provider = {
  provide: APP_INITIALIZER,
  useFactory: (appConfigService: AppConfigService) => appConfigService.loadConfig(),
  deps: [AppConfigService],
  multi: true,
};
