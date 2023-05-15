import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DkpModule } from './dkp/dkp.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/rsd'), DkpModule],
})
export class AppModule {}
