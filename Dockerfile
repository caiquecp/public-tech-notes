FROM node:16

ENV PORT 8080

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY src ./src

EXPOSE $PORT

CMD [ "node", "src/api/server.js"]