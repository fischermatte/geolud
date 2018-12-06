import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectController } from './api/projects/project.controller';
import { ContactController } from './api/contact/contact.controller';
import { MailService } from './mail/mail.service';
import { AppConfig, MailConfigProvider } from './app.config';
import { DataInitializerService } from './initialization/data-initializer.service';
import {ChatGateway} from './api/chat/chat.gateway';
import {Project} from './api/projects/project.model';

@Module({
  imports: [TypeOrmModule.forRoot(AppConfig.mongoConnectionOptions), TypeOrmModule.forFeature([Project])],
  controllers: [ProjectController, ContactController],
  providers: [MailService, DataInitializerService, MailConfigProvider, ChatGateway],
})
export class AppModule {}
