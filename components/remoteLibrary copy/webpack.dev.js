const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const { veinFinder } = require("remotes-config");
const pkg = require("./package.json");

module.exports = merge(common, {
  mode: "development",
  entry: "./src",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    port: veinFinder(pkg),
    hot: true,
    compress: true,
    watchFiles: ["src/**/*"],
  },
});
