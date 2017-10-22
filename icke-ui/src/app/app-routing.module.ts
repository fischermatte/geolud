import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ResumeComponent} from "./resume/resume.component";
import {ProjectsComponent} from "./projects/projects.component";
import {ContactComponent} from "./contact/contact.component";
import {ProjectService} from "./projects/project.service";
import {RestHttpInterceptorProvider} from "./core/rest.http.interceptor";


@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'resume', component: ResumeComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'contact', component: ContactComponent}
  ])],
  exports: [RouterModule],
  providers: [ProjectService, RestHttpInterceptorProvider]
})

export class AppRoutingModule {
}
