# api-init

## Background

API requires PostgreSQL and Redis. These are all included in the docker compose package, which will be provisioned as part of the setup below.

## Pre-Reqs
1. Install [Docker](https://www.docker.com/)
  * Run `wget -qO- https://get.docker.com/ | sh`
  * Run `sudo usermod -aG docker $(whoami)`
  * For **macOS** run `brew cask install docker`
2. Install [Docker-Compose](https://docs.docker.com/compose/)
  * Run `sudo curl -o /usr/local/bin/docker-compose -L "https://github.com/docker/compose/releases/download/1.11.2/docker-compose-$(uname -s)-$(uname -m)"`
  * Run `sudo chmod +x /usr/local/bin/docker-compose`
  * Run `docker-compose -v`
  * For **macOS** run `brew install docker-compose` `eval "$(docker-machine env default)"`
3. Install [nvm](https://github.com/creationix/nvm)
  * For **macOS** run `brew install nvm`
4. Install [Node.js >= 8](https://nodejs.org/en/)
  * We recommend doing this with **nvm**
  * `nvm install 8` will install the 6.3.1 version of node
  * `nvm list` will show you list of instaled nodes
  * `nvm use 8` will will used 6.3.1 version
5. Install [Yarn](https://yarnpkg.com/lang/en/docs/install/)
  * For **macOS** run `brew install yarn --without-node`
6. Clone this repo
7. `yarn config set workspaces-experimental true`
  * Run `./scripts/yarn-workspaces.sh`

## Start services

1. Start Dependent services `docker-compose -f ./scripts/docker-compose.yml up -d` or stop services `docker-compose -f ./scripts/docker-compose.yml stop`
2. Build core modules `yarn build:core`
3. Init project (init lerna, install node modules) `./scripts/yarn-workspaces.sh`
4. Start API localy `yarn dev`
  * Check code quality `yarn lint`

$(docker-machine ip default)