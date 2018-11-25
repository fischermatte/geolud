import { Module } from '@nestjs/common';
import { ProjectsController } from './projects/projects.controller';
import { ContactController } from './contact/contact.controller';
import { MailService } from './mail/mail.service';

@Module({
  imports: [],
  controllers: [ProjectsController, ContactController],
  providers: [MailService],
})
export class AppModule {}
