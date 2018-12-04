import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectController } from './projects/project.controller';
import { ContactController } from './contact/contact.controller';
import { MailService } from './mail/mail.service';
import { Project } from './projects/project.entity';
import { DataInitializerService } from './core/data-initializer/data-initializer.service';
import { CONFIG } from './core/config/config';

@Module({
  imports: [TypeOrmModule.forRoot(CONFIG.db), TypeOrmModule.forFeature([Project])],
  controllers: [ProjectController, ContactController],
  providers: [MailService, DataInitializerService],
})
export class AppModule {}
