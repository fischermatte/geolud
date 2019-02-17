import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'resume', loadChildren: './modules/resume/resume.module#ResumeModule' },
  { path: 'projects', loadChildren: './modules/projects/projects.module#ProjectsModule' },
  { path: 'chat', loadChildren: './modules/chat/chat.module#ChatModule' },
  { path: 'contact', loadChildren: './modules/contact/contact.module#ContactModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
