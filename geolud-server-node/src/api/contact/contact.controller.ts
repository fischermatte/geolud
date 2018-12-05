import { Controller, Inject, Post, Body } from '@nestjs/common';
import { MailService } from '../../mail/mail.service';
import { API, ContactRequest } from '../api';

@Controller(API.CONTACT)
export class ContactController {
  constructor(@Inject('MailService') private mailService: MailService) {}

  @Post()
  submitContactRequest(@Body() contactRequest: ContactRequest): void {
    this.mailService.sendEmail(contactRequest.name, contactRequest.email, contactRequest.message);
  }
}
