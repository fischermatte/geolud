import { Injectable, OnModuleInit } from '@nestjs/common';
import { MongoRepository } from 'typeorm';
import { ALL_PROJECTS } from './data-initializer.projects';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from '../projects/project.model';

@Injectable()
export class DataInitializerService implements OnModuleInit {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: MongoRepository<Project>,
  ) {}

  onModuleInit(): any {
    // tslint:disable-next-line:no-console
    return this.projectRepository.clear().catch(() => console.log('no collection yet present')).finally(() => {
      ALL_PROJECTS.forEach(project => {
        return this.projectRepository.save(project);
      });
    });
  }
}
