import { ModuleWithProviders, NgModule } from '@angular/core';
import { restHttpInterceptorProvider } from './interceptors/rest.http.interceptor';
import { appConfigServiceProvider } from './config/app-config.service';
import { ToastrModule } from 'ngx-toastr';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NotificationEffects } from './notification/store/notification.effects';

@NgModule({
  imports: [
    ToastrModule.forRoot({
      preventDuplicates: true,
      tapToDismiss: true,
    }),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([NotificationEffects]),
  ],
})
export class GeoludCoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: GeoludCoreModule,
      providers: [restHttpInterceptorProvider, appConfigServiceProvider],
    };
  }
}
