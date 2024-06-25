import { Logger, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { AppController } from './app.controller';
import { ScaleGateway } from './scale/scale.gateway';
import { SerialModule } from './serial/serial.module';
import { SupplierModule } from './supplier/supplier.module';
import { MeasurementModule } from './measurement/measurement.module';

@Module({
  controllers: [AppController],
  providers: [ScaleGateway, PrismaService, Logger],
  imports: [SerialModule, SupplierModule, MeasurementModule],
})
export class AppModule {}
