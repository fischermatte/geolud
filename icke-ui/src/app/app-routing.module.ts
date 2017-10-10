import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ResumeComponent} from "./resume/resume.component";
import {ProjectsComponent} from "./projects/projects.component";
import {ContactComponent} from "./contact/contact.component";
import {ProjectsResolver} from "./projects/projects.resolver";
import {ProjectService} from "./projects/project.service";
import {RestHttpInterceptor} from "./core/rest.http.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";


@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'resume', component: ResumeComponent},
    {
      path: 'projects',
      component: ProjectsComponent,
      resolve: {
        projects: ProjectsResolver
      }
    },
    {path: 'contact', component: ContactComponent}
  ])],
  exports: [RouterModule],
  providers: [ProjectService, ProjectsResolver, /* TODO what is best practise so set content type in http client ?*/{
    provide: HTTP_INTERCEPTORS,
    useClass: RestHttpInterceptor,
    multi: true
  }]
})
export class AppRoutingModule {
}
