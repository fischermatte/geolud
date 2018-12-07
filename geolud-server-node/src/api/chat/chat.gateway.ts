import {OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse} from '@nestjs/websockets';
import { Observable, of, ReplaySubject } from 'rxjs';
import { ChatMessage } from './chat.model';
import {ALL_PROJECTS} from '../../initialization/data-initializer.projects';
import {OnModuleInit} from '@nestjs/common';

@WebSocketGateway()
export class ChatGateway implements OnGatewayInit {
  server;

  private subject: ReplaySubject<ChatMessage> = new ReplaySubject(10, 1000 * 60 * 2);


  afterInit(server: WebSocketServer): void {
    this.server = server;
    this.subject.subscribe(value => {
      this.server.emit();
    });
  }
  @SubscribeMessage('chat')
  onMessage(client, message: ChatMessage): Observable<WsResponse<ChatMessage>> {
    message.timestamp = new Date();
    this.subject.next(message);
    return of({ event: 'confirmation', data: message });
  }
}
