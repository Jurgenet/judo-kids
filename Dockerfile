FROM node:16-alpine

# ENV HOST=0.0.0.0
# ENV PORT=3000

WORKDIR /app

RUN apk update && apk upgrade
RUN apk add git
RUN npm install yarn

COPY ./package*.json /app

RUN  yarn && yarn cache clean

COPY . .