import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatEntry } from './chat-entry';
import { MessageBotService } from '../../services/message-bot/message-bot.service';

// Chat page component. Users can chat with the Echo Bot.

@Component({
  selector: 'chitchat-chat',
  templateUrl: './chitchat-chat.component.html',
  styleUrls: ['./chitchat-chat.component.css']
})
export class ChitchatChatComponent implements OnInit {
  name: string;
  chatHistory: Array<ChatEntry> = new Array();
  nextEntry: string;
  @ViewChild('chatHistoryPanel') private chatHistoryPanel: ElementRef;
  @ViewChild('chatEntryField') private chatEntryField: ElementRef;

  constructor(private route: ActivatedRoute,
              private messageBotService: MessageBotService) {
  }

  // Get the name from the URL query parameters
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
    this.focusOnEntryField();
  }

  // Send a new message to the Echo Bot and display the response. Reset the message entry field and scroll
  // to the bottom of the chat field
  enterMessage() {
    this.chatHistory.push(new ChatEntry(this.name, this.nextEntry));
    this.messageBotService.postMessage(this.nextEntry).subscribe(
      response => {
        this.chatHistory.push(new ChatEntry('Echo Bot', response['message']));
        this.nextEntry = '';
        this.chatHistoryPanel.nativeElement.scrollTop = this.chatHistoryPanel.nativeElement.scrollHeight;
      },
      error => {
        this.chatHistory.push(new ChatEntry('Error', 'Echo Bot is currently unavailable. Please try again later.'));
      }
    );
    this.focusOnEntryField();
  }

  // Reset focus on the chat entry field
  focusOnEntryField() {
    this.chatEntryField.nativeElement.focus();
  }

}
