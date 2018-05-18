const nconf = require("nconf");
const path = require("path");

export default (dir?: String) => {
  const configDir = dir || "./src/config/";

  nconf.argv();
  nconf.env();
  if (nconf.get("NODE_ENV") && nconf.get("NODE_ENV") !== "") {
    nconf.add("nodeEnv", { type: "file", file: path.join(configDir, `${nconf.get("NODE_ENV")}.json`) });
  }

  nconf.add("defaults", { type: "file", file: path.join(configDir, "default.json") });
  return nconf;
};
