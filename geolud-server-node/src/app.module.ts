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
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [__dirname + '/**/*.entity{.ts}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Project]),
  ],
  controllers: [ProjectController, ContactController],
  providers: [MailService],
})
export class AppModule {}
