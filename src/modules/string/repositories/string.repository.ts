import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { BaseRepository } from 'src/common/base.repository';
import { DataSource } from 'typeorm';
import { Str } from '../entities/str.entity';

@Injectable({ scope: Scope.REQUEST })
export class StringRepository extends BaseRepository {
  constructor(dataSource: DataSource, @Inject(REQUEST) req: Request) {
    super(dataSource, req);
  }

  async getString(): Promise<Str[]> {
    return await this.getRepository(Str).find();
  }

  async save(str: Str): Promise<void> {
    await this.getRepository(Str).save(str);
  }
}
