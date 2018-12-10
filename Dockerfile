FROM node:10 as deps

WORKDIR /app
COPY ./package.json ./yarn.lock ./
RUN yarn install

#---

FROM deps as source

COPY ./__mocks__ ./__mocks__
COPY ./src ./src
COPY ./static ./static
COPY ./.babelrc ./.babelrc
COPY ./.eslintignore ./.eslintignore
COPY ./.eslintrc ./.eslintrc
COPY ./.prettierignore ./.prettierignore
COPY ./.prettierrc ./.prettierrc
COPY ./gatsby-config.js ./gatsby-config.js
COPY ./jest-preprocess.js ./jest-preprocess.js
COPY ./loadershim.js ./loadershim.js
COPY ./mock.js ./mock.js

#---

FROM source as lint

RUN yarn lint

#---

FROM source as test

RUN yarn test

#---

FROM source as build

RUN yarn build

#---

FROM fholzer/nginx-brotli:v1.14.2
LABEL maintainer="hello@smartive.ch"

EXPOSE 80

RUN rm -f /etc/nginx/conf.d/*.conf
COPY mime.types /etc/nginx/mime.types
COPY nginx.conf /etc/nginx/conf.d/smartive.conf

COPY --from=build /app/public/ /pub
