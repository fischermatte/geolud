import { Test, TestingModule } from '@nestjs/testing';
import { DataInitializerService } from './data-initializer.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import {Project} from '../api/PATHS';

describe('DataInitializerService', () => {
  let service: DataInitializerService;
  const projectRepository = {};

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DataInitializerService,
        {
          provide: getRepositoryToken(Project),
          useValue: projectRepository,
        },
      ],
    }).compile();
    service = module.get<DataInitializerService>(DataInitializerService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
