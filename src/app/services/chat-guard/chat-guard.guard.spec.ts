import { TestBed, async, inject } from '@angular/core/testing';

import { ChatGuard } from './chat-guard.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { NameEntryOverlayService } from '../name-entry-overlay/name-entry-overlay.service';
import { OverlayModule } from '@angular/cdk/overlay';

describe('ChatGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ChatGuard,
        NameEntryOverlayService
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        OverlayModule
      ]
    });
  });

  it('should ...', inject([ChatGuard], (guard: ChatGuard) => {
    expect(guard).toBeTruthy();
  }));
});
