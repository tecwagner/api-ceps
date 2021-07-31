import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigurationService } from 'src/config/configuration.service';
import { Cep } from './cep.entity';

@Injectable()
export class CepService {
  constructor(private readonly configurationService: ConfigurationService) {}

  async getApiCep(zipCode: string): Promise<Cep> {
    console.log('zip', zipCode);
    console.log('ccc3', this.configurationService.Url);
    const result = await axios.get(
      `${this.configurationService.Url}/${zipCode}/json/`,
    );
    console.log('res', result);
    return new Cep();
  }
}
