import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { CepController } from './cep/cep.controller';
import { CepService } from './cep/cep.service';
import configuration from './config/configuration';
import { ConfigurationModule } from './config/configuration.module';

@Module({
  controllers: [AppController, CepController],
  providers: [AppService, CepService],
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    ConfigurationModule,
  ],
})
export class AppModule {}
