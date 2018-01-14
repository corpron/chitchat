import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Service for posting messages to the Echo Bot service

@Injectable()
export class MessageBotService {
  // the url is in the environment files
  private url: string = environment.echoBotUrl;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  // post a message to the Echo Bot
  postMessage(message) {
    const body = JSON.stringify({message: message});
    return this.http.post(this.url, body, this.httpOptions);
  }
}
