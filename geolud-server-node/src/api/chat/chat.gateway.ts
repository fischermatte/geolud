import { SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets';
import { Observable, of, ReplaySubject } from 'rxjs';
import { ChatMessage } from './chat.model';

@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer() server;

  private subject: ReplaySubject<ChatMessage> = new ReplaySubject(10, 1000 * 60 * 2);

  @SubscribeMessage('chat')
  onMessage(client, message: ChatMessage): Observable<WsResponse<ChatMessage>> {
    message.timestamp = new Date();
    this.subject.next(message);
    return of({ event: 'confirmation', data: message });
  }
}
