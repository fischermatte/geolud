import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectController } from './projects/project.controller';
import { ContactController } from './contact/contact.controller';
import { MailService } from './mail/mail.service';
import { Project } from './projects/project.entity';
import { DataInitializerService } from './core/data-initializer.service';
import { ConfigurationService } from './core/configuration.service';

const AppConfig = new ConfigurationService().createAppConfig();

@Module({
  imports: [TypeOrmModule.forRoot(AppConfig.mongoConnectionOptions), TypeOrmModule.forFeature([Project])],
  controllers: [ProjectController, ContactController],
  providers: [MailService, DataInitializerService, {
      provide: 'MailConfig',
      useValue: AppConfig.mailConfig,
  }],
})
export class AppModule {}
