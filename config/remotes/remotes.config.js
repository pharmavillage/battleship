// const pkg = require("./package.json");

function getConfig(pkg_json) {
  switch (pkg_json) {
    case "store":
      return {
        port: 32001,
        shared: {
          react: { singleton: true },
          "react-dom": { singleton: true },
          effector: { singleton: true },
          "effector-react": { singleton: true },
          "styled-components": { singleton: true },
        },
      };
    /**=======================
     * !      SHARED
     *
     *
     *========================**/
    case "react-counter":
      return {
        port: 32002,
        shared: {
          react: { singleton: true },
          "react-dom": { singleton: true },
          effector: { singleton: true },
          "effector-react": { singleton: true },
          "styled-components": { singleton: true },
        },
      };
    case "remote-library":
      return {
        port: 32004,
        shared: {
          react: { singleton: true },
          "react-dom": { singleton: true },
          "styled-components": { singleton: true },
        },
      };
    case "vue-counter":
      return {
        port: 32003,
        shared: {
          vue: { singleton: true },
          effector: { singleton: true },
          "effector-vue": { singleton: true },
          "styled-components": { singleton: true },
        },
      };
    /**=======================
     * !      MODULES
     *
     *
     *========================**/
    case "shell":
      return {
        port: 62621,
        shared: {
          react: { singleton: true },
          "react-dom": { singleton: true },
          vue: { singleton: true },
          effector: { singleton: true },
          "effector-react": { singleton: true },
          "effector-vue": { singleton: true },
          "styled-components": { singleton: true },
        },
      };
    /**=======================
     * !      APP
     *
     *
     *========================**/
    case "styledComponent":
      return { port: 32009 };
    case "federated-css-tailwind-css-global":
      return { port: 32010 };
    /**=======================
     * !      MISC
     *
     *
     *========================**/
    default:
      return null;
  }
}

function veinFinder(name) {
  const port = getConfig(name).port;
  console.log("found port", port);
  return port;
}

function getRemoteEntryUrl(port, name) {
  const { CODESANDBOX_SSE, HOSTNAME = "" } = process.env;

  // Check if the example is running on CodeSandbox
  if (!CODESANDBOX_SSE) {
    return `${name}@//localhost:${port}/remoteEntry.js`;
  }

  const parts = HOSTNAME.split("-");
  const codesandboxId = parts[parts.length - 1];

  return `//${codesandboxId}-${port}.sse.codesandbox.io/remoteEntry.js`;
}

class RemoteConfig {
  constructor(pkg, remotes = []) {
    console.log("REMOTECONF:" + JSON.stringify({ pkg: pkg.name, remotes }));
    const name = pkg.name;
    const shared = getConfig(name).shared || {};

    // Assuming `remotes` is an array of keys
    const remotesArray = remotes.map((remoteName) => {
      return { [remoteName]: getRemoteEntryUrl(veinFinder(remoteName), remoteName) };
    });

    const remotesObject = remotesArray.reduce((acc, curr) => {
      return Object.assign(acc, curr);
    }, {});

    this.filename = "remoteEntry.js";
    this.name = name;
    this.shared = shared;
    this.remotes = remotesObject;
  }
}

module.exports = { RemoteConfig, veinFinder };
