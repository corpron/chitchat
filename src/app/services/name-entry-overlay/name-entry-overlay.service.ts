import { Injectable } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { NameEntryComponent } from '../../components/name-entry/name-entry.component';

@Injectable()
export class NameEntryOverlayService {
  overlayRef = null;

  constructor(private overlay: Overlay) {
  }

  open() {
    if (this.overlayRef == null) {
      const config = new OverlayConfig({
        hasBackdrop: true,
        positionStrategy: this.overlay.position().global().centerHorizontally().top('50px')
      });
      this.overlayRef = this.overlay.create(config);
      const nameEntryPortal = new ComponentPortal(NameEntryComponent);
      this.overlayRef.attach(nameEntryPortal);
    }
  }

  close() {
    if (this.overlayRef !== null) {
      this.overlayRef.detach();
      this.overlayRef = null;
    }
  }

}
