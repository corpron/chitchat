import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChitChatComponent } from './chitchat.component';

@NgModule({
  declarations: [
    ChitChatComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ChitChatComponent]
})
export class ChitChatModule { }
