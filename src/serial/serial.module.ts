import { Module } from '@nestjs/common';
import { SerialHandlerService } from './serial-handler.service';

@Module({
  providers: [SerialHandlerService],
  exports: [SerialHandlerService],
})
export class SerialModule {}
