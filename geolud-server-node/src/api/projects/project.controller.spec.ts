import { Test, TestingModule } from '@nestjs/testing';
import { ProjectController } from './project.controller';
import { getRepositoryToken } from '@nestjs/typeorm';
import {Project} from '../PATHS';

describe('Project Controller', () => {
  let module: TestingModule;
  const projectRepository = {};

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ProjectController],
      providers: [
        {
          provide: getRepositoryToken(Project),
          useValue: projectRepository,
        },
      ],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ProjectController = module.get<ProjectController>(ProjectController);
    expect(controller).toBeDefined();
  });
});
