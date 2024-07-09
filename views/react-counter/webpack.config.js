const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    port: 58841,
  },
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.png$/,
        use: {
          loader: 'url-loader',
          options: { limit: 8192 },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'react_counter',
      filename: 'remoteEntry.js',
      remotes: {
        store: `store@${getRemoteEntryUrl(55955)}`,
      },
      exposes: {
        './ReactCounter': './src/ReactCounter',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        effector: { singleton: true },
        'effector-react': { singleton: true },
        'styled-components': { singleton: true },
      },
    }),
  ],
};

function getRemoteEntryUrl(port) {
  const { CODESANDBOX_SSE, HOSTNAME = '' } = process.env;

  // Check if the example is running on codesandbox
  // https://codesandbox.io/docs/environment
  if (!CODESANDBOX_SSE) {
    return `//localhost:${port}/remoteEntry.js`;
  }

  const parts = HOSTNAME.split('-');
  const codesandboxId = parts[parts.length - 1];

  return `//${codesandboxId}-${port}.sse.codesandbox.io/remoteEntry.js`;
}
