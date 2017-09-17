import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CollapseModule} from 'ngx-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProjectsComponent} from './projects/projects.component';
import {ContactComponent} from './contact/contact.component';
import {ResumeComponent} from './resume/resume.component';
import {SkillsComponent} from './skills/skills.component';
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ContactComponent,
    ResumeComponent,
    SkillsComponent,
    HomeComponent
  ],
  imports: [
    CollapseModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
