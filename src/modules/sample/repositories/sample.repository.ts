import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { BaseRepository } from 'src/common/base.repository';
import { DataSource } from 'typeorm';
import { Sample } from '../entities/sample.entity';

@Injectable({ scope: Scope.REQUEST })
export class SampleRepository extends BaseRepository {
  constructor(dataSource: DataSource, @Inject(REQUEST) req: Request) {
    super(dataSource, req);
  }

  async getAllSamples() {
    return await this.getRepository(Sample).find();
  }
}
