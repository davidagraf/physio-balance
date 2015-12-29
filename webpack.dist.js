/*eslint-env node */

var webpack = require('webpack');

var devConfig = require('./webpack.dev.js');
var NodeEnvironmentProduction = new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'});

devConfig.debug = false;
devConfig.devtool = null;

devConfig.plugins.push(NodeEnvironmentProduction);
devConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());
devConfig.plugins.push(new webpack.optimize.OccurenceOrderPlugin());
devConfig.plugins.push(new webpack.optimize.DedupePlugin());

module.exports = devConfig;
