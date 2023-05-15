import { Module } from '@nestjs/common';
import { DkpController } from './dkp.controller';
import { DkpService } from './dkp.service';

@Module({
  controllers: [DkpController],
  providers: [DkpService],
})
export class DkpModule {}
