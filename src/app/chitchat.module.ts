import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChitchatComponent } from './chitchat.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { NameEntryComponent } from './components/name-entry/name-entry.component';
import { NameEntryOverlayService } from './services/name-entry-overlay/name-entry-overlay.service';
import { FormsModule } from '@angular/forms';
import { ChitchatChatComponent } from './components/chitchat-chat/chitchat-chat.component';
import { ChitchatRoutingModule } from './chitchat-routing.module';
import { ChatGuard } from './services/chat-guard/chat-guard.guard';
import { HttpClientModule } from '@angular/common/http';
import { MessageBotService } from './services/message-bot/message-bot.service';

@NgModule({
  declarations: [
    ChitchatComponent,
    NameEntryComponent,
    ChitchatChatComponent
  ],
  imports: [
    BrowserModule,
    OverlayModule,
    FormsModule,
    ChitchatRoutingModule,
    HttpClientModule
  ],
  providers: [
    NameEntryOverlayService,
    ChatGuard,
    MessageBotService
  ],
  entryComponents: [NameEntryComponent],
  bootstrap: [ChitchatComponent]
})
export class ChitchatModule {
}
