import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectPeriodPipe } from './project-period.pipe';
import { BlockUIModule } from 'ng-block-ui';
import { ProjectService } from './project.service';
import { StoreModule } from '@ngrx/store';
import { projectReducer } from './state/project.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProjectEffects } from './state/project.effects';
import { ProjectApiService } from './project.api.service';

const routes: Routes = [{ path: '', component: ProjectsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}

@NgModule({
  declarations: [ProjectsComponent, ProjectPeriodPipe],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    BlockUIModule.forRoot(),
    StoreModule.forFeature('projectFeature', {
      projects: projectReducer,
    }),
    EffectsModule.forFeature([ProjectEffects]),
  ],
  providers: [ProjectService, ProjectApiService, ProjectEffects],
})
export class GeoludProjectsModule {}
