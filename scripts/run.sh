#!/bin/bash

envsubst < /glass/www/assets/env.template.js > /glass/www/assets/env.js
/usr/bin/supervisord -n -c /etc/supervisord.conf
