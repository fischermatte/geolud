import { Test, TestingModule } from '@nestjs/testing';
import { DataInitializerService } from './data-initializer.service';

describe('DataInitializerService', () => {
  let service: DataInitializerService;
  
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataInitializerService],
    }).compile();
    service = module.get<DataInitializerService>(DataInitializerService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
