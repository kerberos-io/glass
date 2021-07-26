#!/bin/bash

envsubst < /var/www/frontend/assets/env.template.js > /var/www/frontend/assets/env.js
/usr/bin/supervisord -n -c /etc/supervisord.conf
