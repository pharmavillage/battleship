const fs = require("fs");
const yaml = require("js-yaml");

// For reading the Slipway YML file
function parseSlipwayYML(filePath) {
  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    return yaml.load(fileContents);
  } catch (e) {
    console.error(e);
    return null;
  }
}

function readSlipwayYML(filePath) {
  return parseSlipwayYML(filePath);
}

// For appending a specific key to the Slipway YML data
function insertKeyToSlipway(ymlData, key, value) {
  ymlData[key] = value;
  return ymlData;
}

function addSlipwayKeyValue(ymlData, key, value) {
  return insertKeyToSlipway(ymlData, key, value);
}

// For saving the modified Slipway YML data
function writeSlipwayYML(filePath, ymlData) {
  try {
    const yamlStr = yaml.dump(ymlData);
    fs.writeFileSync(filePath, yamlStr, "utf8");
  } catch (e) {
    console.error(e);
  }
}

function persistSlipwayYML(filePath, ymlData) {
  writeSlipwayYML(filePath, ymlData);
}

module.exports = { readSlipwayYML, addSlipwayKeyValue, persistSlipwayYML };
