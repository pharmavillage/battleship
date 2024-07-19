const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const pkg = require("./package.json");
const { veinFinder, RemoteConfig } = require("remotes-config");

module.exports = {
  entry: "./src/index",
  mode: "development",
  output: {
    publicPath: "auto",
  },
  devServer: {
    port: veinFinder(pkg["name"]),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      ...new RemoteConfig(pkg),
      library: { type: "global", name: "store" },
      exposes: {
        "./Counter": "./src/counter",
      },
    }),
  ],
};
