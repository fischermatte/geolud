import {
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    WsResponse,
} from '@nestjs/websockets';
import {from, Observable, ReplaySubject} from 'rxjs';
import { map } from 'rxjs/operators';
import {PATHS} from '../api';
import {ChatMessage} from './chat.model';

@WebSocketGateway()
export class EventsGateway {
    @WebSocketServer() server;

    private subject: ReplaySubject<ChatMessage>;

    @SubscribeMessage(PATHS.CHAT)
    findAll(client, data): Observable<WsResponse<ChatMessage>> {
        return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
    }
}