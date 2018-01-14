import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { NameEntryOverlayService } from "../name-entry-overlay/name-entry-overlay.service";

@Injectable()
export class ChatGuard implements CanActivate {

  constructor(private router: Router,
              private nameEntryOverlayService: NameEntryOverlayService) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const name = next.queryParamMap.get('name');
    if (name && name.length > 0) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
