const fs = require('fs');
const yaml = require("yaml");

// Function to read and parse YAML file
function readYamlFile(filePath) {
  const fileContents = fs.readFileSync(filePath, "utf8");
  return yaml.parse(fileContents);
}

module.exports = readYamlFile