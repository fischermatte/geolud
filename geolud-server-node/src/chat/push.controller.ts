import { Body, Controller, Post } from '@nestjs/common';
import { PATHS } from '../api';
import { MongoRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PushRegistration } from '../projects/project.model';

@Controller(PATHS.PUSH)
export class PushController {
  constructor(
    @InjectRepository(PushRegistration)
    private readonly pushRepository: MongoRepository<PushRegistration>,
  ) {}

  @Post()
  registerPush(@Body() pushRegistration: PushRegistration): Promise<PushRegistration> {
    return this.pushRepository.save(pushRegistration);
  }
}
