import { TestBed, inject } from '@angular/core/testing';

import { MessageBotService } from './message-bot.service';

describe('MessageBotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageBotService]
    });
  });

  it('should be created', inject([MessageBotService], (service: MessageBotService) => {
    expect(service).toBeTruthy();
  }));
});
