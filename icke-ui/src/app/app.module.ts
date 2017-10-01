import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProjectsComponent} from './projects/projects.component';
import {ContactComponent} from './contact/contact.component';
import {ResumeComponent} from './resume/resume.component';
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ContactComponent,
    ResumeComponent,
    HomeComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
