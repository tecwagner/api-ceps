import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CepController } from './cep/cep.controller';
import { CepService } from './cep/cep.service';
import configuration from './config/configuration';
import { ConfigurationModule } from './config/configuration.module';

@Module({
  controllers: [CepController],
  providers: [CepService],
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    ConfigurationModule,
  ],
})
export class AppModule {}
