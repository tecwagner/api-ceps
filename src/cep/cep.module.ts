import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from 'src/config/configuration';
import { ConfigurationModule } from 'src/config/configuration.module';
import { CepController } from './cep.controller';
import { CepService } from './cep.service';

@Module({
  controllers: [CepController],
  providers: [CepService],
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    ConfigurationModule,
  ],
})
export class CepModule {}
