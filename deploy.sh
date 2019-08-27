#!/bin/bash
npm run build
mkdir -p /var/www/html/TDefuse/
cp -r ./dist/TDefuse/* /var/www/html/TDefuse
systemctl restart nginx.service
