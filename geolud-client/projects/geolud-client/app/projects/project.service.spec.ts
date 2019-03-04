import { inject, TestBed } from '@angular/core/testing';
import { ProjectService } from './project.service';
import { ApolloModule } from 'apollo-angular';

describe('ProjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloModule],
      providers: [],
    });
  });

  it('should be created', inject([ProjectService], (service: ProjectService) => {
    expect(service).toBeTruthy();
  }));
});
