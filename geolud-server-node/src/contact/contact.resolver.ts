import { Inject } from '@nestjs/common';
import { MailService } from '../mail/mail.service';
import { ContactRequest } from './contact.model';
import { Args, Mutation, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver('Contact')
export class ContactResolvers {
  constructor(@Inject('MailService') private mailService: MailService) {}

  @Mutation('submitContactRequest')
  submitContactRequest(@Args('contactRequest') contactRequest: ContactRequest): string {
    this.mailService.sendEmail(contactRequest.name, contactRequest.email, 'GEOLUD-SITE: Contact Request', contactRequest.message);
    pubSub.publish('contactRequestSubmitted', { contactRequestSubmitted: 'contact request sent' });
    return 'contact request sent';
  }

  @Subscription('contactRequestSubmitted')
  contactRequestSubmitted() {
    return {
      subscribe: () => pubSub.asyncIterator('contactRequestSubmitted'),
    };
  }
}
