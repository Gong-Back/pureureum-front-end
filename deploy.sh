#!/bin/bash
REPOSITORY=/home/ubuntu/prr-deploy
cd $REPOSITORY

yarn install --ignore-engines
npx pm2 reload all