import { Component, OnInit } from '@angular/core';
import { NameEntryOverlayService } from './services/name-entry-overlay/name-entry-overlay.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'chitchat',
  templateUrl: './chitchat.component.html',
  styleUrls: ['./chitchat.component.css']
})
export class ChitchatComponent implements OnInit {
  title = 'chitchat';

  constructor(private nameEntryOverlayService: NameEntryOverlayService,
              private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          if (this.router.url === '/') {
            this.nameEntryOverlayService.open();
          } else {
            this.nameEntryOverlayService.close();
          }
        }
      }
    );
  }
}
