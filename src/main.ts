/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigurationService } from './config/configuration.service';

const pckg = require('../package.json');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configuration = app.get(ConfigurationService);
  const options = new DocumentBuilder()
    .setTitle(pckg.name)
    .setDescription(pckg.description)
    .setVersion(pckg.version)
    .addTag('ceps', 'Consulta de ceps')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(configuration.port);
}
bootstrap();
