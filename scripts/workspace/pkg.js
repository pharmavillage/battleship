const fs = require("fs");
const path = require("path");
const yaml = require("yaml");

// Load the files
const pkgPath = path.resolve(__dirname, "./package.json");
const lernaPath = path.resolve(__dirname, "./lerna.json");
const workspacesPath = path.resolve(__dirname, "./workspaces.yml");

// Read and parse the package.json file
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));

// Read and parse the lerna.json file
const lerna = JSON.parse(fs.readFileSync(lernaPath, "utf8"));

// Read and parse the workspaces.yml file
const workspaces = yaml.parse(fs.readFileSync(workspacesPath, "utf8"));

// Update the workspaces in package.json
pkg.workspaces = {
  ...pkg.workspaces,
  packages: workspaces.packages,
};

// Update the packages in lerna.json
lerna.packages = workspaces.packages;

// Write the updated package.json file back to disk
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2), "utf8");

// Write the updated lerna.json file back to disk
fs.writeFileSync(lernaPath, JSON.stringify(lerna, null, 2), "utf8");

// Log the updated values to the console
console.log(workspaces.packages);
console.log(pkg.workspaces.packages);
console.log(lerna.packages);
