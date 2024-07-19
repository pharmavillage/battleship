const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { RemoteConfig, veinFinder } = require("remotes-config");
const { ModuleFederationPlugin } = require("webpack").container;
const pkg = require("./package.json");

module.exports = () => ({
  mode: "development",
  cache: false,
  devtool: "source-map",
  optimization: {
    minimize: false,
  },
  target: "web",
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    publicPath: "auto",
  },
  resolve: {
    extensions: [".vue", ".js", ".json"],
    alias: {
      vue: "@vue/runtime-dom",
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      {
        test: /\.png$/,
        use: {
          loader: "url-loader",
          options: { limit: 8192 },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new ModuleFederationPlugin({
      ...new RemoteConfig(pkg, ["store"]),
      exposes: {
        "./VueCounter": "./src/bootstrap",
      },
    }),
    new VueLoaderPlugin(),
  ],
  devServer: {
    port: veinFinder(pkg["name"]),
  },
});
