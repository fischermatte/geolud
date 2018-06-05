import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {webSocket} from 'rxjs/webSocket';
import {environment} from '../../environments/environment';

interface ChatMessage {
  user: User;
  message: string;
  timestamp: Date;
}

interface User {
  id: string;
  name: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('messagesContainer')
  private messagesContainer: ElementRef;
  @ViewChild('messageInput')
  private messageInput: ElementRef;
  private subject: Subject<ChatMessage>;
  private user: User;
  message: string;
  messages: ChatMessage [] = [];

  constructor() {
  }

  ngOnInit() {
    this.subject = this.connect(environment.wsBase + '/chat');
    this.subject.subscribe(message => {
      this.messages.push(message);
    });
    this.scrollToBottom();
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
    if (this.messageInput) {
      this.messageInput.nativeElement.focus();
    }
  }

  public connect(url): Subject<ChatMessage> {
    if (!this.subject) {
      this.subject = webSocket(url);
    }
    return this.subject;
  }

  public send() {
    if (this.message) {
      this.sendMessage({message: this.message, user: this.user, timestamp: new Date()});
    }
  }

  public setUsername(username: string) {
    if (!username || !username.trim()) {
      return;
    }
    this.user = this.createUser(username);
    this.messages.push({message: 'You joined the chat as <strong>' + username + '<strong>', user: null, timestamp: new Date()});
  }

  private sendMessage(message: ChatMessage) {
    this.subject.next(message);
    this.message = '';
  }

  private createUser(username: string) {
    return {
      name: username,
      id: this.uuid()
    };
  }

  private scrollToBottom(): void {
    try {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    } catch (err) {
    }
  }

  private uuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }


}
