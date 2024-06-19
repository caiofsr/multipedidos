import { join } from 'node:path';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ScaleGateway } from './scale/scale.gateway';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  await app.listen(3000);

  const scaleGateway = app.get(ScaleGateway);
  scaleGateway.sendWeight();
}
bootstrap();
