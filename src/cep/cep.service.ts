/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigurationService } from 'src/config/configuration.service';
import { Cep } from './cep.entity';

@Injectable()
export class CepService {
  constructor(private readonly configurationService: ConfigurationService) {}

  async getApiCep(zipCode: string): Promise<Cep> {
    if (!zipCode || zipCode.length !== 8) {
      throw new HttpException('Digite um CEP Válido!', HttpStatus.UNAUTHORIZED);
    }

    const result = await axios.get(
      `${this.configurationService.Url}/${zipCode}/json/`,
    );

    if (result.data.erro) {
      throw new HttpException(
        `CEP ${zipCode} inválido! `,
        HttpStatus.BAD_REQUEST,
      );
    }

    return result.data;
  }
}
