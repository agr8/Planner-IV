FROM node:16.13.1-alpine
LABEL version="1.0.0" maintainer="angelagr@correo.ugr.es"
WORKDIR /app/
RUN chown -R node:node /app/
COPY package*.json ./
USER node
RUN npm ci
WORKDIR /app/test
ENTRYPOINT ["npm","run","test"]