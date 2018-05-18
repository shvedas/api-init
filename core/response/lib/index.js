"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zlib = require("zlib");
// export default (req, res, next) => {
//   res.render = ( ...arg ) => {
//     const [data = {}, message = ""] = arg;
//     const response = ( data && data.code && data.message ) ? data : { code: 200, message: message ? message : "", data: data };
//     res.res_code = response.code;
//     res.res_message = response.message;
//     const content = zlib.gzipSync(new Buffer(JSON.stringify(response)));
//     res.writeHead(200, {
//       "Content-Encoding": "gzip",
//       "Content-Type": "application/json",
//       "Content-Length": content.length
//     });
//     res.end(content);
//   };
//   next();
// };
exports.default = (req, res, next) => {
    res.render = (data = undefined, message = "", code = 200) => {
        const response = { code: code, message: message, data: data };
        res.res_code = response.code;
        res.res_message = response.message;
        const content = zlib.gzipSync(new Buffer(JSON.stringify(response)));
        res.writeHead(200, {
            "Content-Encoding": "gzip",
            "Content-Type": "application/json",
            "Content-Length": content.length
        });
        res.end(content);
    };
    next();
};
//# sourceMappingURL=index.js.map