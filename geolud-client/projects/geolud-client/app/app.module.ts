import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RestHttpInterceptorProvider } from './core/rest.http.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppConfigService } from './app-config.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ApolloModule } from 'apollo-angular';
import { HttpLinkModule } from 'apollo-angular-link-http';
import { EnvironmentInitializerProvider } from './core/environment.initializer';
import { GraphqlApolloOptionsProvider } from './core/graphql.apollo.options';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    NgbModule,
    BrowserModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      tapToDismiss: true,
    }),
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ApolloModule,
    HttpLinkModule,
  ],
  providers: [AppConfigService, RestHttpInterceptorProvider, EnvironmentInitializerProvider, GraphqlApolloOptionsProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
