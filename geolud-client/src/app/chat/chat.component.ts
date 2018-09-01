import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ChatService} from './chat.service';
import {PushService} from '../core/push/push.service';
import {AlertService} from '../core/alert/alert.service';
import {ChatMessage, ChatMessageType, ChatUser} from '../api/chat';
import {ChatMessageItem} from './chat.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @ViewChild('messagesContainer')
  private messagesContainer: ElementRef;
  @ViewChild('messageInput')
  private messageInput: ElementRef;
  user: ChatUser;
  message: string;
  messages: ChatMessageItem[] = [];
  pushEnabled = false;

  constructor(private chatService: ChatService, private pushService: PushService, private alertService: AlertService) {
  }

  ngOnInit() {
    this.chatService.getUser().subscribe(user => this.user = user);
    this.scrollToBottom();
    this.chatService.onMessage((message: ChatMessageItem) => {
      this.messages.push(message);
      this.scrollToBottom();
      this.focusInput();
    });
  }

  public togglePush(checked: boolean): void {
    setTimeout(() => {
      if (checked) {
        this.enablePush();
      } else {
        this.disablePush();
      }
    });
  }

  private focusInput() {
    if (this.messageInput) {
      this.messageInput.nativeElement.focus();
    }
  }

  private enablePush(): Promise<void> {
    return this.pushService.register().then(() => {
        this.pushEnabled = true;
      },
      error => {
        this.pushEnabled = false;
        console.log(error);
        this.alertService.addError('Failed to enable push notifications');
      }
    );
  }

  private disablePush(): Promise<void> {
    return this.pushService.unregister().then(
      () => {
        this.pushEnabled = false;
      },
      error => {
        console.log(error);
        this.pushEnabled = true;
      }
    );
  }

  public send() {
    if (this.message) {
      this.chatService.send(new ChatMessage(this.message, this.user, ChatMessageType.CHAT));
      this.message = '';
    }
  }

  public loginWithUsername(username: string) {
    if (!username || !username.trim()) {
      return;
    }
    this.chatService.login(this.createUser(username));
  }

  private createUser(username: string) {
    return {
      name: username,
      id: this.uuid()
    };
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      try {
        this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
      } catch (err) {
      }
    });
  }

  private uuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
