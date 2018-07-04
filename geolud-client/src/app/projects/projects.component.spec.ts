import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectsComponent} from './projects.component';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BlockUIModule} from 'ng-block-ui';
import {ProjectService} from './project.service';
import {environment} from '../../environments/environment';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, NgbModule.forRoot(), BlockUIModule.forRoot()],
      declarations: [ProjectsComponent],
      providers: [ProjectService]
    })
      .compileComponents();
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
