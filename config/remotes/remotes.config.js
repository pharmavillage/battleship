function getConfig(pkg_json) {
  switch (pkg_json) {
    case "store":
      return {
        port: 32001,
        shared: {
          effector: { singleton: true },
          "effector-react": { singleton: true },
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
    case "react_counter":
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
    case "vue_counter":
      return {
        port: 32003,
        shared: {
          vue: { singleton: true },
          effector: { singleton: true },
          "effector-vue": { singleton: true },
          "styled-components": { singleton: true },
        },
      };
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
    case "styledComponent":
      return { port: 32009 };
    case "federated-css-tailwind-css-global":
      return { port: 32010 };
    default:
      return null;
  }
}

function veinFinder(name) {
  const config = getConfig(name);
  if (!config) {
    throw new Error(`Configuration for package ${name} not found.`);
  }
  const port = config.port;
  console.log("found port", name, port);
  return port;
}

function getRemoteEntryUrl(port, name) {
  const { CODESANDBOX_SSE, HOSTNAME = "" } = process.env;

  if (!CODESANDBOX_SSE) {
    return `${name}@//localhost:${port}/remoteEntry.js`;
  }

  const parts = HOSTNAME.split("-");
  const codesandboxId = parts[parts.length - 1];

  return `//${codesandboxId}-${port}.sse.codesandbox.io/remoteEntry.js`;
}

class RemoteConfig {
  constructor(pkg, remotes = []) {
    console.log(
      `$: ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------`
    );
    console.log(JSON.stringify({ pkg: pkg.name, remotes }));
    console.log(
      `$: ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------`
    );

    const name = pkg.name;
    const config = getConfig(name);
    if (!config) {
      throw new Error(`Configuration for package ${name} not found.`);
    }
    const shared = config.shared || {};

    console.log(remotes);

    let _remotes = {};

    remotes &&
      remotes.map((remoteName) => {
        try {
          const port = veinFinder(remoteName);
          _remotes = { ..._remotes, [remoteName]: getRemoteEntryUrl(port, remoteName) };
        } catch (error) {
          console.error(`Error finding remote ${remoteName}:`, error.message);
        }
      });

    console.log(
      `$: ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------`
    );
    console.log(JSON.stringify({ _remotes }));
    console.log(
      `$: ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------`
    );

    this.filename = "remoteEntry.js";
    this.name = name;
    this.shared = shared;
    this.remotes = _remotes;
  }
}

module.exports = { RemoteConfig, veinFinder };
