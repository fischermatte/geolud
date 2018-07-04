import {AppConfig} from '../app/app-config.service';

export const environment = {
  production: true,
  appConfig: new AppConfig() // will be loaded at startup
};

