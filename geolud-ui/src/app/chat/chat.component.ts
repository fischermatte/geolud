import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {webSocket} from 'rxjs/webSocket';

interface ChatMessage {
  type: string;
  user: string;
  message: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('messagesContainer')
  private messagesContainer: ElementRef;
  private subject: Subject<ChatMessage>;
  private user: string;
  message: string;
  messages: ChatMessage [] = [];

  constructor() {
  }

  ngOnInit() {
    this.subject = this.connect('ws://localhost:8080/v1/chat');
    this.subject.subscribe(message => {
      this.messages.push(message);
    });
    this.scrollToBottom();
    this.user = 'User' + Math.floor(Math.random() * 5);
  };

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  public connect(url): Subject<ChatMessage> {
    if (!this.subject) {
      this.subject = webSocket(url);
    }
    return this.subject;
  }

  public send() {
    if (this.message) {
      this.subject.next({type: "asda", message: this.message, user: this.user});
      this.message = '';
    }
  }

  private scrollToBottom(): void {
    try {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    } catch (err) {
    }
  }


}
