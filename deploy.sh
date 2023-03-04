#!/bin/bash

cd /home/ubuntu/prr-deploy 
sudo yarn 
sudo npx pm2 reload all 