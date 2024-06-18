import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ScaleGateway } from './scale/scale.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [ScaleGateway],
})
export class AppModule {}
