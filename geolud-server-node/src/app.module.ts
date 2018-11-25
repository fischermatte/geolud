import { Module } from '@nestjs/common';
import { ProjectController } from './project/project.controller';
import { ContactController } from './contact/contact.controller';
import { MailService } from './mail/mail.service';

@Module({
  imports: [],
  controllers: [ProjectController, ContactController],
  providers: [MailService],
})
export class AppModule {}
