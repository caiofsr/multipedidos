import { Controller, Get } from '@nestjs/common';
import { MeasurementService } from './measurement.service';

@Controller()
export class MeasurementController {
  constructor(private measurementService: MeasurementService) {}

  @Get('/measurements')
  async getAll() {
    return this.measurementService.getAll();
  }
}
