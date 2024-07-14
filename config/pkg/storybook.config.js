// scripts.js

const StorybookScripts = {
  "dev:tailwind": "tailwindcss -o tailwind.css --watch",
  "dev:storybook": "storybook dev",
  "dev:webpack": "webpack serve --config webpack.dev.js",
  build: "npm-run-all --parallel build:css build:legacy build:storybook",
  dev: "npm-run-all --parallel dev:tailwind dev:webpack dev:storybook",
  "build:css": "tailwindcss -o src/tailwind.css --minify",
  "build:legacy": "webpack --config webpack.prod.js",
  "build:storybook": "storybook build",
};

module.exports = StorybookScripts;
