import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectService } from './project.service';
import { ProjectPeriodPipe } from './project-period.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, BrowserAnimationsModule],
      declarations: [ProjectsComponent, ProjectPeriodPipe],
      providers: [ProjectService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
