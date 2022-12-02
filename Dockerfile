FROM node:17-alpine

ENV NITRO_HOST ='0.0.0.0'
ENV NITRO_PORT ='3000'

WORKDIR /nuxt-app
COPY ./ /nuxt-app

RUN npm install
RUN npm run build

EXPOSE 3000

CMD [ "node", ".\\.output\\server\\index.mjs" ]
