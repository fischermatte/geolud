import { Controller, Inject, Post } from '@nestjs/common';
import { MailService } from '../mail/mail.service';

interface ContactRequest {
  name?: string;
  email: string;
  message: string;
}

@Controller('contact')
export class ContactController {
  constructor(@Inject('MailService') private mailService: MailService) {}

  @Post()
  submitContactRequest(@Body() contactRequest: ContactRequest): void {
    this.mailService.sendEmail(contactRequest.name, contactRequest.email, contactRequest.message);
  }
}
