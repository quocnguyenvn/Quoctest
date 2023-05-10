const { alias, configPaths } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
  let loaders = config.module.rules[1].oneOf;
  loaders.splice(loaders.length - 1, 0, {
    test: /\.less$/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      { loader: 'postcss-loader' },
      { loader: 'less-loader' },
    ],
  });
  if (env === 'production') {
    config.devtool = false;
  }
  alias({
    ...configPaths('tsconfig.paths.json'),
  })(config);
  return config;
};
