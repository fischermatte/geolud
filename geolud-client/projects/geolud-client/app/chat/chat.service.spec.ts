import { TestBed, inject } from '@angular/core/testing';

import { ChatService } from './chat.service';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

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
