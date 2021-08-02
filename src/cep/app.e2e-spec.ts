import 'jest';
import * as request from 'supertest';

test('get /ceps retorna dados com sucesso', () => {
  return request('http://localhost:3002')
    .get('/api/v1/ceps?zipcode=14407351')
    .then((response) => {
      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Object);
    });
});

test('get /ceps retorna cep inválido', () => {
  return request('http://localhost:3002')
    .get('/api/v1/ceps?zipcode=22333999')
    .then((response) => {
      console.log('res', response.text);
      expect(response.status).toBe(403);
    });
});

test('get /ceps retorna um valor válido', () => {
  return request('http://localhost:3002')
    .get('/api/v1/ceps?zipcode=22333')
    .then((response) => {
      console.log('res', response.text);
      expect(response.status).toBe(403);
      expect(response.text).toBe('CEP 22333999 inválido!');
    });
});
