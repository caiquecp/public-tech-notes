FROM node:16-slim

ENV PORT 8080

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY src ./src

EXPOSE $PORT

CMD [ "node", "src/api/server.js"]