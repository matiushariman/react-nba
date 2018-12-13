/*
  Webpack config for react-storybook
*/
const path = require('path');
const baseDir = path.resolve(__dirname, '../app');

// load the dev config
const devConfig = require('../internals/webpack/webpack.dev.babel');

module.exports = function genConfig(storybookBaseConfig) {
  // concat loaders from dev config
  /* eslint-disable no-param-reassign */
  storybookBaseConfig.module.rules = storybookBaseConfig.module.rules.concat(
    devConfig.module.rules,
  );

  // add the "app" folder to the resolve list
  storybookBaseConfig.resolve.modules.push(baseDir);

  // return the altered config
  return storybookBaseConfig;
};
