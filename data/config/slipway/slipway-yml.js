const getAbsolutePath = require("m-i-file");
const slipway = require("battleship-constants");

// Functions to get the absolute paths of slipway.yml and workspaces.yml
function getSlipwayPath() {
  return getAbsolutePath(slipway);
}

module.exports = { getSlipwayPath };
