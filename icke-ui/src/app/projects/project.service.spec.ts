import { TestBed, inject } from '@angular/core/testing';
import { ProjectService } from './project.service';
import {HttpClientModule} from '@angular/common/http';

describe('ProjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ProjectService]
    });
  });

  it('should be created', inject([ProjectService], (service: ProjectService) => {
    expect(service).toBeTruthy();
  }));
});
