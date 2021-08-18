FROM node:12-alpine

WORKDIR /home/api

COPY package.json .

# RUN yarn install

COPY . .

CMD yarn start:docker:dev