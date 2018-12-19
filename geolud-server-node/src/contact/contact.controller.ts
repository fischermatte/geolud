import { Controller, Inject, Post, Body } from '@nestjs/common';
import { MailService } from '../mail/mail.service';
import { ContactRequest } from './contact.model';
import { PATHS } from '../api';

@Controller(PATHS.CONTACT)
export class ContactController {
  constructor(@Inject('MailService') private mailService: MailService) {}

  @Post()
  submitContactRequest(@Body() contactRequest: ContactRequest): void {
    this.mailService.sendEmail(contactRequest.name, contactRequest.email, 'GEOLUD-SITE: Contact Request', contactRequest.message);
  }
}
