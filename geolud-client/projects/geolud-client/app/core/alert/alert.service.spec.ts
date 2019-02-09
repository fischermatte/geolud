import { TestBed, inject } from '@angular/core/testing';

import { AlertService } from './alert.service';
import { ToastrModule } from 'ngx-toastr';

describe('AlertService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()],
      providers: [AlertService],
    });
  });

  it('should be created', inject([AlertService], (service: AlertService) => {
    expect(service).toBeTruthy();
  }));
});
