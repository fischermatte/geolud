import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectPeriodPipe } from './project-period.pipe';
import { BlockUIModule } from 'ng-block-ui';
import { ProjectService } from './project.service';

const routes: Routes = [{ path: '', component: ProjectsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}

@NgModule({
  declarations: [ProjectsComponent, ProjectPeriodPipe],
  imports: [CommonModule, ProjectsRoutingModule, BlockUIModule.forRoot()],
  providers: [ProjectService],
})
export class GeoludProjectsModule {}
