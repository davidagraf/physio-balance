var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('./webpack.common.js');

config.devtool = 'cheap-module-inline-source-map';
config.plugins.push(
  new webpack.LoaderOptionsPlugin({
    debug: true
  })
);

module.exports = config;
