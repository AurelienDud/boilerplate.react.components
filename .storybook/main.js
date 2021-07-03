const workspace = require('../workspace.config')

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config) => {
    // paths need to be also declared as alias into webpack.config.js
    // paths is relative to baseUrl defined above
    config.resolve.alias = {
      ...config.resolve.alias,
      ...workspace.alias
    };
    config.resolve.extensions.push(".ts", ".tsx", ".js", ".jsx");
    return config;
  }
}