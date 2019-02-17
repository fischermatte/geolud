import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './resume.component';

const routes: Routes = [{ path: '', component: ResumeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumeRoutingModule {}

@NgModule({
  declarations: [ResumeComponent],
  imports: [CommonModule, ResumeRoutingModule],
  providers: [],
})
export class GeoludResumeModule {}
