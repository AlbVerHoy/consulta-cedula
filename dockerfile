#!/bin/bash
FROM alpine as build
RUN apk add --update nodejs npm
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM alpine
RUN apk add --update nodejs npm
RUN npm install -g serve
WORKDIR /app
COPY --from=build /app/build ./build
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]