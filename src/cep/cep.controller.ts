/* eslint-disable prettier/prettier */
import { Query } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Cep } from './cep.entity';
import { CepService } from './cep.service';

@Controller('api/v1/ceps')
@ApiTags('ceps')
export class CepController {
  constructor(private readonly cepService: CepService) {}
  @Get()
  @ApiOperation({
    summary: 'Listar as transações de acordo com os parametros desejados',
  })
  @ApiQuery({ name: 'cep', required: true, type: String })
  @ApiResponse({
    status: 200,
    description: 'Entidade do tipo CEP contendo as informações solicitadas.',
    type: Cep,
  })
  @ApiResponse({ status: 404, description: 'Nenhum cep encontrado.' })
  findCep(@Query() cep: string) {
    console.log('cepContro', cep);
    return this.cepService.getApiCep(cep);
  }
}
