import { Test, TestingModule } from '@nestjs/testing';
import { PushController } from './push.controller';

describe('Push Controller', () => {
  let controller: PushController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PushController],
    }).compile();

    controller = module.get<PushController>(PushController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
