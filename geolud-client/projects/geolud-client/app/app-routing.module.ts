import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'resume', loadChildren: './resume/resume.module#ResumeModule' },
  { path: 'projects', loadChildren: './projects/projects.module#ProjectsModule' },
  { path: 'chat', loadChildren: './chat/chat.module#ChatModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
