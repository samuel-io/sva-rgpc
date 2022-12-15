FROM node:16 as builder

WORKDIR /app

COPY . .

RUN npm install

COPY . .

EXPOSE 4000

CMD [ "node", "index.js" ]