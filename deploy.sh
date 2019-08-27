#!/bin/bash

ng build --prod --base-href /tdefuse/
cd ./dist && tar -cvf ../tdefuse.tar TDefuse && cd -
scp tdefuse.tar charly@tsoundboard.fr:/tmp
rm -f tdefuse.tar

ssh -t charly@tsoundboard.fr "
cd /tmp &&
tar xvf tdefuse.tar &&
sudo rm -rf /var/www/html/tdefuse &&
sudo mv TDefuse /var/www/html/tdefuse/ &&
rm -f tdefuse.tar"
