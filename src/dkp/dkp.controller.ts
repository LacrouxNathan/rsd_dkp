import { Controller, Get, Query } from '@nestjs/common';
import { DkpService } from './dkp.service';

@Controller('dkp')
export class DkpController {
  constructor(private service: DkpService) {}
  @Get()
  find(@Query('id') id: string): string {
    if (id != null) {
      return this.service.findAll();
    }
    return this.service.find(id);
  }
}
