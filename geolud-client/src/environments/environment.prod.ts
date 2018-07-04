import {AppConfig} from '../app/app-config';

export const environment = {
  production: true,
  appConfig: new AppConfig() // will be loaded at startup
};

