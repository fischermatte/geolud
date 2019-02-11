import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectPeriodPipe } from './project-period.pipe';
import {ProjectService} from './project.service';

const routes: Routes = [{ path: '', component: ProjectsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}

@NgModule({
  declarations: [ProjectsComponent, ProjectPeriodPipe],
  imports: [CommonModule, ProjectsRoutingModule],
  providers: [ProjectService],
})
export class ProjectsModule {}
