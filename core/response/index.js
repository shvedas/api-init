'use strict';
const zlib = require("zlib");

module.exports = function(req, res, next){
  res.render = ( ...arg ) => {
    let [data = {}, message = ''] = arg;
    let response = ( data && data.code && data.message )? data : { code: 200, message: message ? message : '', data: data };
    res.res_code = response.code;
    res.res_message = response.message;
    let content = zlib.gzipSync(new Buffer(JSON.stringify(response)));
    res.writeHead(200, {
      'Content-Encoding': 'gzip',
      'Content-Type': 'application/json',
      'Content-Length': content.length
    });
    res.end(content);
  };
  next();
};