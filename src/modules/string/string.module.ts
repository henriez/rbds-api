import { Module } from '@nestjs/common';
import { StringController } from './string.controller';
import { StringService } from './string.service';
import { StringRepository } from './repositories/string.repository';

@Module({
  controllers: [StringController],
  providers: [
    StringService,
    StringRepository,
    // link more modules and services here
  ],
})
export class StringModule {}
