import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectController } from './projects/project.controller';
import { ContactController } from './contact/contact.controller';
import { MailService } from './mail/mail.service';
import { Project } from './projects/project.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      username: 'geolud',
      password: 'geolud',
      database: 'geolud-db',
      authSource: 'admin',
      entities: [Project],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Project]),
  ],
  controllers: [ProjectController, ContactController],
  providers: [MailService],
})
export class AppModule {}
