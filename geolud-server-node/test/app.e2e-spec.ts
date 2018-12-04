import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import {API, ContactRequest, Project} from '../src/api/api';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

    it('/api/projects (GET)', () => {
        return request(app.getHttpServer())
            .get(`/${API.PROJECTS}`)
            .then(response => {
                const projects: Project[] = response.body;
                expect(projects.length).toBe(24);
            });
    });

    it('/api/contact (POST)', () => {
        const contactRequest: ContactRequest = {
            message: 'my contact request',
            email: 'somebody@somewhere',
            name: 'somebody',
        };
        return request(app.getHttpServer())
            .post(`/${API.CONTACT}`)
            .send(contactRequest)
            .expect(201);
    });

  afterAll(async () => {
    await app.close();
  });
});
