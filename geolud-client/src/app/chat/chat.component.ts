import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ChatEntry, ChatMessage, ChatMessageType, ChatUser} from './chat.model';
import {ChatService} from './chat.service';

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
  user: ChatUser;
  message: string;
  messages: ChatEntry[];

  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
    this.chatService.getUser().subscribe(user => this.user = user);
    this.messages = this.chatService.getMessages();
    this.scrollToBottom();
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
    if (this.messageInput) {
      this.messageInput.nativeElement.focus();
    }
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
