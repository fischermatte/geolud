import { Controller, Get, OnModuleInit, Param } from '@nestjs/common';
import { Project } from './project.entity';
import { MongoRepository, ObjectID } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

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
    const project: Project = {
      id: null,
      title: 'Mobiliar Claim System (MCS)',
      customer: {
        name: 'die Mobiliar',
        url: 'https://www.mobiliar.ch',
      },
      period: {
        from: new Date('2018-03-01'),
        to: new Date('2018-03-01'),
      },
      description:
        'Technologies: Angular, AngularJS, Java/JEE, Kubernetes, Docker',
    };
    this.projectRepository.save(project);
    // console.info('inserted test data');
  }
}
