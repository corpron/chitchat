import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class MessageBotService {
  private url: string = environment.echoBotUrl;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  // Uses http.get() to load data from a single API endpoint
  postMessage(message) {
    const body = JSON.stringify({ message: message } );
    return this.http.post( this.url, body, this.httpOptions);
  }
}
