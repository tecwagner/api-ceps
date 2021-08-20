import 'jest';
import * as request from 'supertest';
import TestUtil from '../common/test/TestUtil';

describe('CepService', () => {
  const url = 'http://localhost:3002';

  const cepValido = '/api/v1/ceps?zipcode=14408050';

  const cepInvalido = '/api/v1/ceps?zipcode=22333999';

  const cepMinLength = '/api/v1/ceps?zipcode=22333';

  it('get /ceps retorna dados com sucesso', () => {
    const cep = TestUtil.giveMeValidZipCode();
    return request(url)
      .get(cepValido)
      .then((response) => {
        expect(response.status).toBe(200);
        expect(cep);
      });
  });

  it('get /ceps retorna cep inválido', () => {
    return request(url)
      .get(cepInvalido)
      .then((response) => {
        expect(response.status).toBe(400);
      });
  });

  it('get /ceps validando o limite de caracter informada', () => {
    return request(url)
      .get(cepMinLength)
      .then((response) => {
        expect(response.status).toBe(401);
      });
  });
});
