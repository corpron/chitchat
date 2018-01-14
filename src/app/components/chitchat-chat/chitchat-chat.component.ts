import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatEntry } from './chat-entry';
import { MessageBotService } from '../../services/message-bot/message-bot.service';

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

  constructor(private route: ActivatedRoute,
              private messageBotService: MessageBotService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }

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
  }

}
