import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ScaleGateway } from './scale/scale.gateway';
import { SerialModule } from './serial/serial.module';

@Module({
  imports: [SerialModule],
  controllers: [AppController],
  providers: [ScaleGateway],
})
export class AppModule {}
