#!/bin/sh

cat /nginx.conf > /etc/nginx/nginx.conf

exec "$@"