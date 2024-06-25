import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SupplierService {
  constructor(private prismaService: PrismaService) {}

  async store(name: string) {
    return this.prismaService.supplier.create({ data: { name } });
  }

  async getAll() {
    return this.prismaService.supplier.findMany();
  }
}
