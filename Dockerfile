FROM node:16-alpine

WORKDIR /app

RUN apk update && apk upgrade
RUN apk add git
RUN npm install yarn

COPY ./package*.json /app

RUN  yarn && yarn cache clean

COPY . .

RUN yarn build

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000

ENTRYPOINT ["node", ".output/server/index.mjs"]