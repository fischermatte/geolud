import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observer} from 'rxjs/Observer';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {


  private subject: Subject<MessageEvent>;
  messages: string [] = [];

  constructor() {
  }

  ngOnInit() {
    this.connect('ws://localhost:8080/v1/chat').subscribe(m => this.messages.push(JSON.stringify(m.data)))
  );
}


public
connect(url)
:
Subject < MessageEvent > {
  if(!
this.subject
)
{
  this.subject = this.create(url);
  console.log('Successfully connected: ' + url);
}
return this.subject;
}

private
create(url)
:
Subject < MessageEvent > {
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

}
