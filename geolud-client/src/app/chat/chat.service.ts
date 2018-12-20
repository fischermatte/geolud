import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { environment } from '../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { ChatEntry, ChatMessage, ChatMessageType, ChatUser } from './chat.model';
import { AlertService } from '../core/alert/alert.service';

export interface WsChatMessage {
  event: string;
  data: ChatMessage;
}

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private userSubject: BehaviorSubject<ChatUser> = new BehaviorSubject(null);
  private webSocketSubject: WebSocketSubject<WsChatMessage>; // lazy init since it connects to websocket
  private currentUser: ChatUser;
  private messages: ChatEntry[] = [];

  constructor(private alertService: AlertService) {
    this.userSubject.subscribe(user => {
      this.handleUserLogin(user);
    });
  }

  private handleUserLogin(user: ChatUser): void {
    this.currentUser = user;
    if (user) {
      this.startListenForWebSocketMessages();
      this.send(new ChatMessage('<strong>' + user.name + '</strong> joined the chat', user, ChatMessageType.LOGIN));
    }
  }

  private startListenForWebSocketMessages() {
    this.getWebSocketSubject()
      .pipe(
        map(message => {
          return {
            message: message.data.text,
            timestamp: message.data.timestamp,
            username: message.data.user ? message.data.user.name : null,
            isFromCurrentUser: this.isMessageOfCurrentUser(message.data),
            isLogin: message.data.type === ChatMessageType.LOGIN,
          };
        }),
      )
      .subscribe(entry => this.messages.push(entry), error => this.alertService.addError('Websocket Issue', error));
  }

  public getMessages(): ChatEntry[] {
    return this.messages;
  }

  getUser(): Observable<ChatUser> {
    return this.userSubject;
  }

  public send(message: ChatMessage) {
    this.getWebSocketSubject().next({ event: 'chat', data: message });
  }

  login(user: ChatUser) {
    this.userSubject.next(user);
  }

  private getWebSocketSubject(): WebSocketSubject<WsChatMessage> {
    if (!this.webSocketSubject) {
      // this.webSocketSubject = webSocket(environment.appConfig.wsBase + '/api/chat');
      this.webSocketSubject = webSocket(environment.appConfig.wsBase);
      console.log('websocket: ' + environment.appConfig.wsBase);
    }
    return this.webSocketSubject;
  }

  private isMessageOfCurrentUser(message: ChatMessage) {
    return this.currentUser && message && message.user && message.user.id && this.currentUser.id === message.user.id;
  }
}
