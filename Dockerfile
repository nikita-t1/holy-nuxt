FROM node:17-alpine

WORKDIR /nuxt-app
COPY ./ /nuxt-app

RUN npm install

CMD [ "node", ".\\.output\\server\\index.mjs" ]
