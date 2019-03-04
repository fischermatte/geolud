import { APP_INITIALIZER, Provider } from '@angular/core';
import { AppConfigService } from '../app-config.service';

export function loadConfig(appConfigService: AppConfigService) {
  return () => appConfigService.loadConfig();
}

export const EnvironmentInitializerProvider: Provider = {
  provide: APP_INITIALIZER,
  useFactory: loadConfig,
  deps: [AppConfigService],
  multi: true,
};
