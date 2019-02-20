import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WsAdapter } from '@nestjs/websockets';

const port = process.env.PORT || 8080;

console.info(`Serving at port ${port}`);

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: console,
    cors: true,
  });
  await app.useWebSocketAdapter(new WsAdapter(app)).listen(port);
}
bootstrap();
