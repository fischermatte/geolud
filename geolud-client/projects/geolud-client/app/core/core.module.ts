import { ModuleWithProviders, NgModule } from '@angular/core';
import { RestHttpInterceptorProvider } from './interceptors/rest.http.interceptor';
import { AppConfigServiceProvider } from './config/app-config.service';

@NgModule({})
export class GeoludCoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: GeoludCoreModule,
      providers: [RestHttpInterceptorProvider, AppConfigServiceProvider],
    };
  }
}
