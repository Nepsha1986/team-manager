let path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config, {configType}) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, '../src'),
      "@main-styles": path.resolve(__dirname, "../src/styles/main.scss"),
      "@primitives": path.resolve(__dirname, '../src/components/primitives'),
      "@blocks": path.resolve(__dirname, '../src/components/blocks'),
      "@templates": path.resolve(__dirname, '../src/components/templates'),
      "@pages": path.resolve(__dirname, '../src/components/pages'),
    };

    // Return the altered config
    return config;
  },
};
