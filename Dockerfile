FROM node:17-alpine

WORKDIR /nuxt-app
COPY ./ /nuxt-app

RUN npm install

EXPOSE 3000

CMD [ "node", ".\\.output\\server\\index.mjs" ]
