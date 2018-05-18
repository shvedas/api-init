#!/bin/bash

npm i -g lerna@latest yarn@rc
yarn config set workspaces-experimental true

rm -Rf node_modules src/*/node_modules core/*/node_modules
rm -Rf yarn.lock src/*/yarn.lock core/*/yarn.lock
yarn
lerna bootstrap