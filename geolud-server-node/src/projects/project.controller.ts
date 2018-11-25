import { Controller, Get, Param } from '@nestjs/common';
import { Project } from './project.entity';
import {MongoRepository, ObjectID} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('projects')
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
    return this.projectRepository.find();
  }
}
