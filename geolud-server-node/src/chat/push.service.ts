import {Injectable} from '@nestjs/common';
import {ChatMessage} from './chat.model';
import {PushRegistration} from '../projects/project.model';
import {InjectRepository} from '@nestjs/typeorm';
import {MongoRepository} from 'typeorm';

@Injectable()
export class PushService {
    constructor(
        @InjectRepository(PushRegistration)
        private readonly pushRepository: MongoRepository<PushRegistration>,
    ) {}

  sendNotification(message: ChatMessage) {
      this.pushRepository.find().then(pushRegistration => {
          return
      })
  }
}
