import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProjectsComponent} from './projects/projects.component';
import {ContactComponent} from './contact/contact.component';
import {ResumeComponent} from './resume/resume.component';
import {HomeComponent} from './home/home.component';
import {BlockUIModule} from 'ng-block-ui';
import {RestHttpInterceptor} from './core/rest.http.interceptor';
import {ChatComponent} from './chat/chat.component';
import {AppConfigService} from './app-config.service';

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
    NgbModule.forRoot(),
    BrowserModule.withServerTransition({ appId: 'geolud-client' }),
    BlockUIModule.forRoot(),
    FormsModule,
    HttpClientModule,
    AppRoutingModule
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
