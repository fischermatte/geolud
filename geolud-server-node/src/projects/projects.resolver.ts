import { Args, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { Project } from './project.model';
import { MongoRepository, ObjectID as TypeOrmObjectID} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectsGuard } from './projects.guard';
import { ObjectID as MongoObjectID} from 'mongodb';

@Resolver('Projects')
export class ProjectsResolvers {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: MongoRepository<Project>,
  ) {}

  @Query('allProjects')
  @UseGuards(ProjectsGuard)
  async allProjects(): Promise<Project[]> {
    const projects = await this.projectRepository.find();
    projects.sort((a, b) => b.period.from.getTime() - a.period.from.getTime());
    return projects;
  }

  @Query('project')
  project(@Args('id') id: string): Promise<Project> {
    return this.projectRepository.findOne(new MongoObjectID(id) as TypeOrmObjectID);
  }
}
