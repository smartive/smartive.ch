FROM node:10 as deps

WORKDIR /app
COPY ./package.json ./package-lock.json ./
RUN npm ci

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

RUN npm run lint

#---

FROM source as test

RUN npm test

#---

FROM source as build

ENV GATSBY_TELEMETRY_DISABLED=1

RUN npm run build

#---

FROM fholzer/nginx-brotli:v1.14.2
LABEL maintainer="hello@smartive.ch"

ENV GATSBY_TELEMETRY_DISABLED=1

EXPOSE 80

RUN rm -f /etc/nginx/conf.d/*.conf
COPY mime.types /etc/nginx/mime.types
COPY nginx.conf /etc/nginx/conf.d/smartive.conf

COPY --from=build /app/public/ /pub
