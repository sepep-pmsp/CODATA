FROM node:23-alpine AS build

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli

RUN npm install

RUN ng build

FROM nginx:1.27-alpine

COPY --from=build /usr/src/app/dist/codata/browser /usr/share/nginx/html
