/*jshint globalstrict:true, trailing:false, unused:true, node:true */
'use strict';

let nconf = require('nconf');
const path = require('path');

module.exports = (dir) => {
  let configDir = dir || './src/config/';

  nconf.argv();
  nconf.env();
  
  if( nconf.get('NODE_ENV') && nconf.get('NODE_ENV') != ''){
    nconf.add('nodeEnv', { type: 'file', file: path.join(configDir, nconf.get('NODE_ENV') + '.json') });
  }
  nconf.add('defaults', { type: 'file', file: path.join(configDir, 'default.json') });
  
  return nconf;
}
