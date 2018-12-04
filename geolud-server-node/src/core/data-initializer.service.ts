import { Injectable, OnModuleInit } from '@nestjs/common';
import { Project } from '../projects/project.entity';
import { MongoRepository } from 'typeorm';
import { ALL_PROJECTS } from './projects';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DataInitializerService implements OnModuleInit {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: MongoRepository<Project>,
  ) {}

  onModuleInit(): any {
    ALL_PROJECTS.forEach(project => {
      this.projectRepository
        .findOne({ where: { title: project.title, description: project.description } }) //
        .then(p => {
          if (!p) {
            return this.projectRepository.save(project);
          }
        });
    });
  }
}