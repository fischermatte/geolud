import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('messagesContainer') private messagesContainer: ElementRef;
  private subject: Subject<MessageEvent>;
  @ViewChild('message')
  private message: HTMLInputElement;
  private subject: Subject<MessageEvent>;

  messages: string [] = ['dhaks kakdjh saldkfjhas ldfkjhasdlfkjas df', 'dhaks kakdjh saldkfjhas ldfkjhasdlfkjas d  asd asd asdasd 6 sf'];

  constructor() {
  }

  ngOnInit() {
    // this.connect('ws://localhost:8080/v1/chat').subscribe(m => this.messages.push(JSON.stringify(m.data)));
    this.scrollToBottom();
  };

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  public connect(url):
    Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.createWebSocketConnection(url);
      console.log('Successfully connected: ' + url);
    }
    return this.subject;
  }

  public send(){
    this.messages.push(this.message.value);
    this.message.value = '';
  }

  private createWebSocketConnection(url): Subject<MessageEvent> {
    let ws = new WebSocket(url);

    let observable = Observable.create(
      (obs: Observer<MessageEvent>) => {
        ws.onmessage = obs.next.bind(obs);
        ws.onerror = obs.error.bind(obs);
        ws.onclose = obs.complete.bind(obs);
        return ws.close.bind(ws);
      });

    let observer = {
      next: (data: Object) => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(data));
        }
      }
    };
    return Subject.create(observer, observable);
  }

  private scrollToBottom(): void {
    try {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    } catch (err) {
    }
  }


}
