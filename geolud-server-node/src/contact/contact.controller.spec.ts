import { Test, TestingModule } from '@nestjs/testing';
import { ContactController } from './contact.controller';

describe('Contact Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ContactController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ContactController = module.get<ContactController>(ContactController);
    expect(controller).toBeDefined();
  });
});
