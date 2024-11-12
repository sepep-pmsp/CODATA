FROM node:22-alpine AS build

RUN npm install -g @angular/cli

WORKDIR /usr/src/app

COPY tsconfig.app.json .

COPY tsconfig.json .

COPY tsconfig.spec.json .

COPY angular.json .

COPY package-lock.json .

COPY package.json .

COPY public ./public

COPY src ./src

RUN npm install

RUN ng build

FROM nginx:1.27-alpine

COPY --from=build /usr/src/app/dist/codata/browser /usr/share/nginx/html
