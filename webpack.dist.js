/*eslint-env node */

var webpack = require('webpack');

var devConfig = require('./webpack.dev.js');

devConfig.debug = false;
devConfig.devtool = null;

devConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());
devConfig.plugins.push(new webpack.optimize.OccurenceOrderPlugin());
devConfig.plugins.push(new webpack.optimize.DedupePlugin());

module.exports = devConfig;
