FROM fholzer/nginx-brotli:v1.14.0
LABEL maintainer="hello@smartive.ch"

EXPOSE 80

RUN rm -f /etc/nginx/conf.d/*.conf
COPY mime.types /etc/nginx/mime.types
COPY nginx.conf /etc/nginx/conf.d/smartive.conf

ADD public/ /pub
