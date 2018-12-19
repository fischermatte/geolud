import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectController } from './projects/project.controller';
import { ContactController } from './contact/contact.controller';
import { MailService } from './mail/mail.service';
import { AppConfig, MailConfigProvider } from './app.config';
import { DataInitializerService } from './initialization/data-initializer.service';
import {ChatGateway} from './chat/chat.gateway';
import {Project} from './projects/project.model';

@Module({
  imports: [TypeOrmModule.forRoot(AppConfig.mongoConnectionOptions), TypeOrmModule.forFeature([Project])],
  controllers: [ProjectController, ContactController],
  providers: [MailService, DataInitializerService, MailConfigProvider, ChatGateway],
})
export class AppModule {}
