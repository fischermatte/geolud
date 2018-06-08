import {Injectable} from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ChatEntry, ChatMessage, ChatMessageType, ChatUser} from './chat.model';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private userSubject: BehaviorSubject<ChatUser> = new BehaviorSubject(null);
  private messagesSubject: WebSocketSubject<ChatMessage>; // lazy init since it connects to websocket
  private currentUser: ChatUser;

  constructor() {
    this.userSubject.subscribe(user => {
      this.currentUser = user;
      if (user) {
        this.send(new ChatMessage('<strong>' + user.name + '</strong> joined the chat', user, ChatMessageType.LOGIN));
      }
    });
  }

  getMessages(): Observable<ChatEntry> {
    return this.getMessagesSubject().map(message => {
      return {
        message: message.text,
        timestamp: message.timestamp,
        username: message.user ? message.user.name : null,
        isFromCurrentUser: this.isMessageOfCurrentUser(message),
        isLogin: message.type === ChatMessageType.LOGIN
      };
    });
  }

  getUser(): Observable<ChatUser> {
    return this.userSubject;
  }

  public send(message: ChatMessage) {
    this.getMessagesSubject().next(message);
  }

  login(user: ChatUser) {
    this.userSubject.next(user);
  }

  private getMessagesSubject(): WebSocketSubject<ChatMessage> {
    if (!this.messagesSubject) {
      this.messagesSubject = webSocket(environment.wsBase + '/chat');
    }
    return this.messagesSubject;
  }

  private isMessageOfCurrentUser(message: ChatMessage) {
    return this.currentUser && message && message.user && message.user.id && this.currentUser.id === message.user.id;
  }

}
