import { Module } from '@nestjs/common';
import { ScaleGateway } from './scale.gateway';
import { SerialModule } from 'src/serial/serial.module';

@Module({
  imports: [SerialModule],
  providers: [ScaleGateway],
})
export class ScaleModule {}
