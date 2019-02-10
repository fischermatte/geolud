import { inject, TestBed } from '@angular/core/testing';

import { ChatService } from './chat.service';
import { ToastrModule } from 'ngx-toastr';

describe('ChatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatService],
      imports: [ToastrModule.forRoot()],
    });
  });

  it('should be created', inject([ChatService], (service: ChatService) => {
    expect(service).toBeTruthy();
  }));
});
