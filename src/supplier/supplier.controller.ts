import { Body, Controller, Get, Post } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { StoreSupplierDto } from './dto/store-supplier.dto';

@Controller()
export class SupplierController {
  constructor(private supplierService: SupplierService) {}

  @Post('/suppliers')
  async store(@Body() body: StoreSupplierDto) {
    return this.supplierService.store(body.name);
  }

  @Get('/suppliers')
  async getAll() {
    return this.supplierService.getAll();
  }
}
