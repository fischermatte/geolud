import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ProjectController} from './projects/project.controller';
import {ContactController} from './contact/contact.controller';
import {MailService} from './mail/mail.service';
import {AppConfig, MailConfigProvider} from './app.config';
import {DataInitializerService} from './initialization/data-initializer.service';
import {ChatGateway} from './chat/chat.gateway';
import {Project, PushRegistration} from './projects/project.model';
import {PushController} from './chat/push.controller';
import {PushService} from './chat/push.service';

@Module({
  imports: [TypeOrmModule.forRoot(AppConfig.mongoConnectionOptions), TypeOrmModule.forFeature([Project, PushRegistration])],
  controllers: [ProjectController, ContactController, PushController],
  providers: [MailService, DataInitializerService, MailConfigProvider, ChatGateway, PushService],
})
export class AppModule {}
