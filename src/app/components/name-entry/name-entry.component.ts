import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Component to display in the overlay. Users will enter their name and be sent to the chat page

@Component({
  selector: 'name-entry-component',
  templateUrl: './name-entry.component.html',
  styleUrls: ['./name-entry.component.css']
})
export class NameEntryComponent {
  name: string = '';

  constructor(private router: Router) {
  }

  // Go to the Chat page
  goToChat() {
    this.router.navigate([ '/chat' ], { queryParams: { 'name': this.name } } );
  }
}
