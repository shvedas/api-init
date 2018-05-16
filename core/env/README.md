# Project configs and environment

For getting env and project config. Based on [nconf] https://www.npmjs.com/package/nconf module.

1. Import module in to code `const env = require('app-env')();`
2. Get NODE_ENV `env.get('NODE_ENV')`
3. Get config parram `env.get('api')`
4. Get config sub parram `env.get('api:port')`