const fs = require("fs");
const path = require("path");
const scripts = require("./scripts");

const packageJsonPath = path.resolve(__dirname, "package.json");
const packageJson = require(packageJsonPath);

packageJson.scripts = { ...packageJson.scripts, ...scripts };

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
