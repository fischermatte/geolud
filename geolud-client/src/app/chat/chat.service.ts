import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ChatEntry, ChatMessage, ChatMessageType, ChatUser } from './chat.model';
import { AlertService } from '../core/alert/alert.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private userSubject: BehaviorSubject<ChatUser> = new BehaviorSubject(null);
  private webSocketSubject: WebSocketSubject<ChatMessage>; // lazy init since it connects to websocket
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
      .map(message => {
        return {
          message: message.text,
          timestamp: message.timestamp,
          username: message.user ? message.user.name : null,
          isFromCurrentUser: this.isMessageOfCurrentUser(message),
          isLogin: message.type === ChatMessageType.LOGIN,
        };
      })
      .subscribe(entry => this.messages.push(entry), error => this.alertService.addError('Websocket Issue', error));
  }

  public getMessages(): ChatEntry[] {
    return this.messages;
  }

  getUser(): Observable<ChatUser> {
    return this.userSubject;
  }

  public send(message: ChatMessage) {
    this.getWebSocketSubject().next(message);
  }

  login(user: ChatUser) {
    this.userSubject.next(user);
  }

  private getWebSocketSubject(): WebSocketSubject<ChatMessage> {
    if (!this.webSocketSubject) {
      this.webSocketSubject = webSocket(environment.appConfig.wsBase + '/v1/chat');
    }
    return this.webSocketSubject;
  }

  private isMessageOfCurrentUser(message: ChatMessage) {
    return this.currentUser && message && message.user && message.user.id && this.currentUser.id === message.user.id;
  }
}
