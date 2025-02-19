import { HttpCode, Get, Controller, UseGuards, Put, Body, Header, Res } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { StringService } from './string.service';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { StrDTO } from './dto/str.dto';
import { join } from 'path';
import { Response } from 'express';

@Controller()
@UseGuards(AuthGuard)
export class StringController {
  constructor(private readonly stringService: StringService) {}

  @Get('string')
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    description: 'Retorna a string configurada para o display',
  })
  async getString(): Promise<string> {
    return await this.stringService.getStr();
  }

  @Put('string')
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    description: 'Atualiza a string configurada para o display',
  })
  @Header('content-type', 'text/plain')
  async putString(@Body() dto: StrDTO): Promise<void> {
    await this.stringService.putStr(dto.value);
  }

  @Get()
  getPage(@Res() res: Response) {
    return res.sendFile(join(__dirname, '../../../../rbds-siteform/index.html'));
  }
}
