import { TestBed, inject } from '@angular/core/testing';

import { NameEntryOverlayService } from './name-entry-overlay.service';
import { OverlayModule } from '@angular/cdk/overlay';

describe('NameEntryOverlayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        OverlayModule
      ],
      providers: [NameEntryOverlayService]
    });
  });

  it('should be created', inject([NameEntryOverlayService], (service: NameEntryOverlayService) => {
    expect(service).toBeTruthy();
  }));
});
