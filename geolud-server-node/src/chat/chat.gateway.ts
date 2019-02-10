import { OnGatewayInit, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { ReplaySubject } from 'rxjs';
import { ChatMessage } from './chat.model';
import { Server } from 'ws';
import { MailService } from '../mail/mail.service';
import { Inject, Logger } from '@nestjs/common';
import { PushService } from './push.service';

@WebSocketGateway()
export class ChatGateway implements OnGatewayInit {
  server: Server;

  private subject: ReplaySubject<ChatMessage> = new ReplaySubject(10, 1000 * 60 * 2);
  private lastChatNotificationEmail: Date;

  constructor(@Inject('MailService') private mailService: MailService, @Inject('PushService') private pushService: PushService) {}

  afterInit(server: Server): void {
    this.server = server;
    this.subject.subscribe(message => {
      this.server.clients.forEach(client => {
        client.send(JSON.stringify({ event: 'chat', data: message }));
      });
    });
  }

  @SubscribeMessage('chat')
  onMessage(client, message: ChatMessage): void {
    message.timestamp = new Date();
    this.notifyChatAction(message);
    this.subject.next(message);
  }

  private notifyChatAction(message: ChatMessage): void {
    const msg: string = JSON.stringify(message);
    Logger.log('chat action going on: ' + msg);
    this.pushService.sendNotification(message);
    const oneHourEarlier: Date = new Date();
    oneHourEarlier.setTime(oneHourEarlier.getTime() - 60 * 60 * 1000);
    if (this.lastChatNotificationEmail == null || this.lastChatNotificationEmail < oneHourEarlier) {
      this.mailService.sendEmail(null, null, 'GEOLUD-SITE: Chat actions going on ...', msg);
    }
    this.lastChatNotificationEmail = new Date();
  }
}
