/* eslint-disable prettier/prettier */
import { Query } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Cep } from './cep.entity';
import { CepService } from './cep.service';
import { FindCepViewModel } from './view-models/find-cep-view-model';

@Controller('api/v1/ceps')
@ApiTags('ceps')
export class CepController {
  constructor(private readonly cepService: CepService) {}
  @Get()
  @ApiOperation({
    summary:
      'Buscar informações de um cep de acordo com os parâmetros desejados',
  })
  @ApiQuery({ name: 'zipcode', required: true, type: String })
  @ApiResponse({
    status: 200,
    description: 'Entidade do tipo CEP contendo as informações solicitadas.',
    type: Cep,
  })
  @ApiResponse({ status: 400, description: 'Nenhum cep encontrado.' })
  findCeps(@Query() params: FindCepViewModel) {
    return this.cepService.findCep(params.zipcode);
  }
}
