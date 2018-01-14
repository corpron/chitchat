import { TestBed, inject } from '@angular/core/testing';

import { MessageBotService } from './message-bot.service';
import { HttpClientModule } from '@angular/common/http';

describe('MessageBotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [MessageBotService]
    });
  });

  it('should be created', inject([MessageBotService], (service: MessageBotService) => {
    expect(service).toBeTruthy();
  }));
});
