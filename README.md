# api-ceps

## Principais Tecnologias Utilizadas

- Node.js

- TypeScript

- Nest.js

## Instalação

- execute: yarn ou npm install

## Comando para executar o projeto.

- execute: yarn start:dev

## Comando para executar o teste.

- execute: yarn test:cov

## Documentação da API Swagger

    http://localhost:3002/api/docs/#/

## Pré Requisito.

Expor um serviço de BUSCA DE CEP
Eu, como usuário, quero informar meu CEP e obter o nome da minha
RUA, BAIRRO, CIDADE e ESTADO para preencher meus dados de cadastro de forma automática.
Os critérios de aceite dessa história são:
· Dado um CEP válido, deve retornar o endereço correspondente
· Dado um CEP válido, que não exista o endereço, deve substituir um dígito da direita para a esquerda por zero até que o endereço seja localizado (Exemplo: Dado 22333999 tentar com 22333990, 22333900 …)
· Dado um CEP inválido, deve retornar uma mensagem reportando o erro: "CEP inválido"O que se espera para as questões 1 - dicas e direcionamentos:
· Os serviços devem receber e responder JSON;
· Faça o uso de Mocks principalmente nos testes;
· Os dados dos CEPs podem ser "Mocados";

## Sobre

Foi criado uma api com objetivo de busca de CEP e retorna o Json com os dados de logradouro.

## Sugestões de Melhoria

Sobre a melhoria aplicada ao projeto, seria criar uma base de dados para guardar os dados consultados.
Assim evitaria diversas requisições, faria uma verificação para buscar o cep na base de dados, se não for encontrado, buscaria os dados na api.
Se ocorrer instabilidade na api: via cep, a base de dados poderia suprir o tempo de instabilidade.
