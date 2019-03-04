import { Inject } from '@nestjs/common';
import { MailService } from '../mail/mail.service';
import { Args, Mutation, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Delivery } from './contact.model';

const pubSub = new PubSub();

@Resolver('Contact')
export class ContactResolvers {
  constructor(@Inject('MailService') private mailService: MailService) {}

  @Mutation('submitContactRequest')
  submitContactRequest(@Args('name') name: string, @Args('name') email: string, @Args('name') message: string): Delivery {
    this.mailService.sendEmail(name, email, 'GEOLUD-SITE: Contact Request', message);
    pubSub.publish('contactRequestSubmitted', { contactRequestSubmitted: 'contact request sent' });
    return {
      sentAt: new Date(),
    };
  }

  @Subscription('contactRequestSubmitted')
  contactRequestSubmitted() {
    return {
      subscribe: () => {
        pubSub.asyncIterator('contactRequestSubmitted');
      },
    };
  }
}
