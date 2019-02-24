FROM node:alpine as build

WORKDIR /builder

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install

COPY . .

RUN yarn run build:prod


FROM nginx:alpine

COPY --from=build /builder/dist/GarlicoinWebsite /usr/share/nginx/html

COPY deployment/default.conf /etc/nginx/conf.d/default.conf
