const getAbsolutePath = require("m-i-file");
const slipway = require("./slipway.yml");
const workspaces = require("./workspaces.yml");

// Functions to get the absolute paths of slipway.yml and workspaces.yml
function getSlipwayPath() {
  return getAbsolutePath("slipway.yml");
}

function getWorkspacesPath() {
  return getAbsolutePath("workspaces.yml");
}

module.exports = { slipway, workspaces, path: { getSlipwayPath, getWorkspacesPath } };
