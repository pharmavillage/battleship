const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const pkg = require("./package.json");

module.exports = merge(common, {
  mode: "production",
  entry: "./apps/root.jsx",
  output: {
    filename: "bundle.js",
    library: {
      type: "commonjs",
      name: pkg["name"],
    },
  },
});
