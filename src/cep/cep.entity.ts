import { ApiProperty } from '@nestjs/swagger';
import { MaxLength } from 'class-validator';
export class Cep {
  @ApiProperty({ type: String })
  @MaxLength(8)
  cep: string;
  @ApiProperty({ type: String })
  logradouro: string;
  @ApiProperty({ type: String })
  complemento: string;
  @ApiProperty({ type: String })
  bairro: string;
  @ApiProperty({ type: String })
  localidade: string;
  @ApiProperty({ type: String })
  uf: string;
  @ApiProperty({ type: String })
  ibge: string;
  @ApiProperty({ type: String })
  gia: string;
  @ApiProperty({ type: String })
  ddd: string;
  @ApiProperty({ type: String })
  siafi: string;
}
