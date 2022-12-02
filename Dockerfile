FROM node:17-alpine

ENV NITRO_HOST ='127.0.0.1'
ENV NITRO_PORT ='3000'

WORKDIR /nuxt-app
COPY ./ /nuxt-app

RUN npm install
RUN npm run build

EXPOSE 3000

WORKDIR /nuxt-app/.output/server

CMD [ "node", "index.mjs" ]
