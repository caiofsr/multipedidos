import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MeasurementService {
  constructor(private prismaService: PrismaService) {}

  async getAll() {
    return this.prismaService.measurement.findMany({
      include: { supplier: true },
    });
  }
}
