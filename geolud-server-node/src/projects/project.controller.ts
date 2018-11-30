import { Controller, Get, OnModuleInit, Param } from '@nestjs/common';
import { Project } from './project.entity';
import { MongoRepository, ObjectID } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ALL_PROJECTS } from './projects';

@Controller('projects')
export class ProjectController implements OnModuleInit {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: MongoRepository<Project>,
  ) {}

  @Get(':id')
  findById(@Param('id') id: string): Promise<Project> {
    return this.projectRepository.findOne(new ObjectID(id));
  }

  @Get()
  findAll(): Promise<Project[]> {
    return this.projectRepository.find();
  }

  onModuleInit(): any {
    ALL_PROJECTS.forEach(project => {
      // this.projectRepository.find
      this.projectRepository.save(project);
    });
  }
}
