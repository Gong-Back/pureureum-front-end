#!/bin/bash
REPOSITORY=/home/ubuntu/prr-deploy
cd $REPOSITORY

sudo yarn install --ignore-engines
sudo npx pm2 reload all