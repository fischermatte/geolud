import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProjectsComponent} from './projects/projects.component';
import {ContactComponent} from './contact/contact.component';
import {ResumeComponent} from './resume/resume.component';
import {HomeComponent} from './home/home.component';
import {RestHttpInterceptor} from './core/rest.http.interceptor';
import {ChatComponent} from './chat/chat.component';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppConfigService} from './app-config.service';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';

export function loadConfig(appConfigService: AppConfigService) {
  return () => appConfigService.loadConfig();
}

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ContactComponent,
    ResumeComponent,
    HomeComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      tapToDismiss: true
    }),
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [
    AppConfigService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RestHttpInterceptor,
      multi: true
    }, {
      provide: APP_INITIALIZER,
      useFactory: loadConfig,
      deps: [AppConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
