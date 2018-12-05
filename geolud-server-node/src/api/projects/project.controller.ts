import { Controller, Get, Param } from '@nestjs/common';
import { MongoRepository, ObjectID } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { API, Project } from '../api';

@Controller(API.PROJECTS)
export class ProjectController {
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
    return this.projectRepository.find().then(projects => {
      projects.sort((a, b) => b.period.from.getTime() - a.period.from.getTime());
      return projects;
    });
  }
}
