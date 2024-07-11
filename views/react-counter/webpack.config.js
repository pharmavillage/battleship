const { ModuleFederationPlugin } = require("webpack").container;
const { RemoteConfig } = require("remotes-config");
const path = require("path");
const pkg = require("./package.json");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    port: veinFinder(pkg["name"]),
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.png$/,
        use: {
          loader: "url-loader",
          options: { limit: 8192 },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      ...new RemoteConfig(pkg, ["store"]),
      exposes: {
        "./ReactCounter": "./src/ReactCounter",
      },
    }),
  ],
};
