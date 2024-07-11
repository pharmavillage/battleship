function getConfig(key) {
  switch (key) {
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
          vue: { singleton: true, requiredVersion: pkg.dependencies.vue },
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

    case "css":
      return { port: 32004 };
    case "cssModule":
      return { port: 32005 };
    case "jss":
      return { port: 32006 };
    case "less":
      return { port: 32007 };
    case "scss":
      return { port: 32008 };
    case "styledComponent":
      return { port: 32009 };
    case "tailwindCssGlobal":
      return { port: 32010 };
    case "tailwindCssModule":
      return { port: 32011 };
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
  return getConfig(name)["port"];
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
  constructor(pkg, remotes) {
    const { name } = pkg;
    const { shared, port } = getConfig(pkg);
    (this.filename = "remoteEntry.js"), (this.name = name);
    this.shared = shared;
    this.remotes = () => {
      return remotes.map((key) => ({ [key]: getRemoteEntryUrl(veinFinder(name), name) })) || {};
    };
  }
}

module.exports = { RemoteConfig, veinFinder };
