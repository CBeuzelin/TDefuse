npm run build
mkdir -p /var/www/html/tdefuse
cp -r ./dist/front/* /var/www/html/tdefuse/
systemctl restart nginx.service