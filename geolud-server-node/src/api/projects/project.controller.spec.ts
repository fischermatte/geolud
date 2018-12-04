import { Test, TestingModule } from '@nestjs/testing';
import { ProjectController } from './project.controller';
import { Project } from './project.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

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
