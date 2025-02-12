import { Injectable } from '@nestjs/common';
import { StringRepository } from './repositories/string.repository';
import { Str } from './entities/str.entity';

@Injectable()
export class StringService {
  constructor(private readonly stringRepository: StringRepository) {}
  async getStr(): Promise<string> {
    return (await this.stringRepository.getString())?.map((s) => s.str)[0];
  }

  async putStr(str: string): Promise<void> {
    const entity = (await this.stringRepository.getString())[0] || new Str();
    entity.str = str;
    await this.stringRepository.save(entity);
  }
}
