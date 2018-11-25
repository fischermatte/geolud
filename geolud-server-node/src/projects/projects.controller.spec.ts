import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsController } from './projects.controller';

describe('Project Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ProjectsController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ProjectsController = module.get<ProjectsController>(ProjectsController);
    expect(controller).toBeDefined();
  });
});
