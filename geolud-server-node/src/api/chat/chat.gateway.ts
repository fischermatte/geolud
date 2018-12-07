import {OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse} from '@nestjs/websockets';
import { Observable, of, ReplaySubject } from 'rxjs';
import { ChatMessage } from './chat.model';
import { Server} from 'ws';

@WebSocketGateway()
export class ChatGateway implements OnGatewayInit {
  server:Server;

  private subject: ReplaySubject<ChatMessage> = new ReplaySubject(10, 1000 * 60 * 2);


  afterInit(server:Server): void {
    this.server = server;
    this.subject.subscribe(message => {
      this.server.clients.forEach(client => {
          client.send(JSON.stringify({ event: 'chat', data: message }));
      })
    });
  }
  @SubscribeMessage('chat')
  onMessage(client, message: ChatMessage): Observable<WsResponse<ChatMessage>> {
    message.timestamp = new Date();
    this.subject.next(message);
    return of({ event: 'chat', data: message });
  }
}
