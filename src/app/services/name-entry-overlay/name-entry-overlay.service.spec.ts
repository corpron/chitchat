import { TestBed, inject } from '@angular/core/testing';

import { NameEntryOverlayService } from './name-entry-overlay.service';

describe('NameEntryOverlayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NameEntryOverlayService]
    });
  });

  it('should be created', inject([NameEntryOverlayService], (service: NameEntryOverlayService) => {
    expect(service).toBeTruthy();
  }));
});
