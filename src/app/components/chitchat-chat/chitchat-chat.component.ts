import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ChatEntry } from "./chat-entry";

@Component({
  selector: 'chitchat-chat',
  templateUrl: './chitchat-chat.component.html',
  styleUrls: ['./chitchat-chat.component.css']
})
export class ChitchatChatComponent implements OnInit {
  name: string;
  chatHistory: Array<ChatEntry> = new Array();
  nextEntry: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }

  enterMessage() {
    this.chatHistory.push(new ChatEntry(this.name, this.nextEntry));
    this.nextEntry = '';
  }

}
