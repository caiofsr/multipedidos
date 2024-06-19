import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ScaleGateway } from './scale/scale.gateway';
import { SerialModule } from './serial/serial.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [SerialModule],
  controllers: [AppController],
  providers: [ScaleGateway, PrismaService, Logger],
})
export class AppModule {}
