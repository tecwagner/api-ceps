import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfigurationService {
  constructor(private configService: ConfigService) {}
  get port(): number {
    return parseInt(this.configService.get('port'));
  }

  get Url(): string {
    return this.configService.get('apis.cep.baseUrl');
  }

  get timeoutCep(): string {
    return this.configService.get('apis.timeout');
  }

  get environmentType(): string {
    return this.configService.get('environment.type');
  }

  get appHost(): string {
    return this.configService.get('environment.appHost');
  }
}
