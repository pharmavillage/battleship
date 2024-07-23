const { ModuleFederationPlugin } = require("@module-federation/enhanced");
const { RemoteConfig } = require("remotes-config");
const pkg = require("./package.json");

module.exports = {
  target: ["web", "es5"],
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    alias: {
      process: "process/browser",
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
          cacheCompression: false,
          cacheDirectory: true,
        },
      },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      ...new RemoteConfig(pkg),
      exposes: {
        // "./Button": "./src/components/button.jsx",
        // "./Header": "./src/components/header.jsx",
      },
    }),
  ],
};
