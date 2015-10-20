/*eslint-env node */

var devConfig = require('./webpack.dev.js');

devConfig.debug = false;
devConfig.devtool = null;

module.exports = devConfig;
