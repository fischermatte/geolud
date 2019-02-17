import { NgModule } from '@angular/core';
import { RestHttpInterceptorProvider } from './rest.http.interceptor';
import { AppConfigServiceProvider } from './config/app-config.service';

@NgModule({
  providers: [RestHttpInterceptorProvider, AppConfigServiceProvider],
})
export class CoreModule {}
