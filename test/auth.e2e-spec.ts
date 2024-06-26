import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import * as request from 'supertest';
import { disconnect } from 'mongoose';
import { AuthDto } from 'src/auth/dto/auth.dto';

const loginDto: AuthDto = {
  login: 'ssepiol@mail.com',
  password: 'swordfish',
};

describe('AuthService', () => {
  let app: INestApplication;
  let token: string;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  it('/auth/login (POST) - success', async () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send(loginDto)
      .expect(200)
      .then(({ body }: request.Response) => {
        expect(body.access_token).toBeDefined();
      });
  });

  it('/auth/login (POST) - wrong password', async () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({ ...loginDto, password: '12345' })
      .expect(401, {
        message: 'Wrong password!',
        error: 'Unauthorized',
        statusCode: 401,
      });
  });

  it('/auth/login (POST) - wrong email', async () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({ ...loginDto, login: 'test@test.com' })
      .expect(401, {
        message: 'User not found!',
        error: 'Unauthorized',
        statusCode: 401,
      });
  });

  afterAll(() => {
    disconnect();
  });
});
