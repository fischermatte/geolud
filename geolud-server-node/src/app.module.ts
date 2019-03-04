import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectController } from './projects/project.controller';
import { ContactController } from './contact/contact.controller';
import { MailService } from './mail/mail.service';
import { AppConfig, MailConfigProvider } from './app.config';
import { DataInitializerService } from './initialization/data-initializer.service';
import { ChatGateway } from './chat/chat.gateway';
import { Project } from './projects/project.model';
import { ProjectsResolvers } from './projects/projects.resolver';
import { ContactResolvers } from './contact/contact.resolver';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppConfig.mongoConnectionOptions),
    TypeOrmModule.forFeature([Project]),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    }),
  ],
  controllers: [ProjectController, ContactController],
  providers: [MailService, DataInitializerService, MailConfigProvider, ChatGateway, ProjectsResolvers, ContactResolvers],
})
export class AppModule {}
