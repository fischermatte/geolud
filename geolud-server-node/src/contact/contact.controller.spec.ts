import { Test, TestingModule } from '@nestjs/testing';
import { ContactController } from './contact.controller';
import { MailService } from '../mail/mail.service';

describe('Contact Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ContactController],
      providers: [MailService, { provide: 'MailConfig', useValue: {} }],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ContactController = module.get<ContactController>(ContactController);
    expect(controller).toBeDefined();
  });
});
