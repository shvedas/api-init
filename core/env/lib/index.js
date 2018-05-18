"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nconf = require("nconf");
const path = require("path");
exports.default = (dir) => {
    const configDir = dir || "./src/config/";
    nconf.argv();
    nconf.env();
    if (nconf.get("NODE_ENV") && nconf.get("NODE_ENV") !== "") {
        nconf.add("nodeEnv", { type: "file", file: path.join(configDir, `${nconf.get("NODE_ENV")}.json`) });
    }
    nconf.add("defaults", { type: "file", file: path.join(configDir, "default.json") });
    return nconf;
};
//# sourceMappingURL=index.js.map