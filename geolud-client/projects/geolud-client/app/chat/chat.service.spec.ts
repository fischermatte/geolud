import {inject, TestBed} from '@angular/core/testing';

import {ChatService} from './chat.service';

describe('ChatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatService],
      imports: [],
    });
  });

  it('should be created', inject([ChatService], (service: ChatService) => {
    expect(service).toBeTruthy();
  }));
});
