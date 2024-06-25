import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { MeasurementController } from './measurement.controller';
import { MeasurementService } from './measurement.service';

@Module({
  controllers: [MeasurementController],
  providers: [MeasurementService, PrismaService],
})
export class MeasurementModule {}
