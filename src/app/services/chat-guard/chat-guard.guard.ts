import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { NameEntryOverlayService } from '../name-entry-overlay/name-entry-overlay.service';

// ChatGuard for not allowing users to get to the Chat page unless they have a name in the URL

@Injectable()
export class ChatGuard implements CanActivate {

  constructor(private router: Router,
              private nameEntryOverlayService: NameEntryOverlayService) {
  }

  // Check if the URL has the name. if so, then they can get to the chat page. Otherwise
  // redirect them to the root route
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
