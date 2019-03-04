import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlockUIModule } from 'ng-block-ui';
import { ProjectService } from './project.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ProjectPeriodPipe } from './project-period.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Provider } from '@angular/core';
import { of } from 'rxjs';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgbModule, BlockUIModule.forRoot(), ToastrModule.forRoot(), BrowserAnimationsModule],
      declarations: [ProjectsComponent, ProjectPeriodPipe],
      providers: [projectServiceProviderMock(), ToastrService],
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

function projectServiceProviderMock(): Provider {
  const mockedProjectService = jasmine.createSpyObj('ProjectService', ['findAll']);
  mockedProjectService.findAll.and.returnValue(of([]));

  return {
    provide: ProjectService,
    useValue: mockedProjectService,
  };
}
