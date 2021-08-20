import { Cep } from '../../cep/cep.entity';

export default class TestUtil {
  static giveMeValidZipCode(): Cep {
    const cep = new Cep();
    (cep.cep = '14408-050'),
      (cep.logradouro = 'Rua Onofre Raimundo Braga'),
      (cep.complemento = ''),
      (cep.bairro = 'Residencial Palermo'),
      (cep.localidade = 'Franca'),
      (cep.uf = 'SP'),
      (cep.ibge = '3516200'),
      (cep.gia = '3104'),
      (cep.ddd = '16'),
      (cep.siafi = '6425');

    return cep;
  }
}
