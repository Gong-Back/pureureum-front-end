#!/bin/bash
REPOSITORY=/home/ubuntu/prr-deploy
cd $REPOSITORY

sudo yarn install --ignore-engines
sudo -E npx pm2 reload all