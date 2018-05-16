'use strict';

class appError extends Error { 

  constructor(code, message){
    super(message);
    //Error.captureStackTrace(this, this.constructor);
    this.code = code;
    this.message = message ? message : 'Internal Server Error';
  }

}


module.exports = (...arg) => {
  let [code = 404, message = ''] = arg;
  return new appError(code, message);
};