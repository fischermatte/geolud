import { APP_INITIALIZER, Provider } from '@angular/core';
import { AppConfigService } from '../app-config.service';

export const EnvironmentInitializerProvider: Provider = {
  provide: APP_INITIALIZER,
  useFactory(appConfigService: AppConfigService) {
    return () => appConfigService.loadConfig();
  },
  deps: [AppConfigService],
  multi: true,
};
