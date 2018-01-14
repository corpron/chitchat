import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'name-entry-component',
  templateUrl: './name-entry.component.html',
  styleUrls: ['./name-entry.component.css']
})
export class NameEntryComponent {
  name: string = '';

  constructor(private router: Router) {
  }

  goToChat() {
    this.router.navigate([ '/chat' ], { queryParams: { 'name': this.name } } );
  }
}
