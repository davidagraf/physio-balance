/*eslint-env node */

var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  eslint: {
    configFile: 'public/.eslintrc'
  },
  debug: true,
  devtool: 'cheap-module-inline-source-map',
  context: path.join(__dirname, 'public'),
  entry: path.join('scripts', 'main.jsx'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: __dirname,
        exclude: path.join(__dirname, 'node_modules'),
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'css?sourceMap!autoprefixer'
        )
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'css?sourceMap!autoprefixer!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true'
        )
      }, {
        test: /\.js$/,
        exclude: path.join(__dirname, 'node_modules'),
        loader: 'babel',
        query: {
          optional: 'runtime',
          blacklist: 'react',
          stage: 0
        }
      }, {
        test: /\.jsx$/,
        exclude: path.join(__dirname, 'node_modules'),
        loader: 'babel',
        query: {
          optional: 'runtime',
          stage: 0
        }
      }, {
        test: /\.json$/, loader: 'json-loader'
      }, {
        test: /\.(ttf|svg|woff|eot)/,
        loader: 'url-loader?limit=10000'
      }, {
        test: /\.(l20n|png|jpg|jpeg)$/, loader: 'file-loader?name=[path][name].[ext]'
      }
    ],
    noParse: [
      new RegExp('jquery.min.js'),
      new RegExp('bootstrap.min.js')
    ]
  },
  plugins: [
    // Extract inline css into separate 'style.css'
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html')
    }),
  ],
  resolve: {
    alias: {
      '^jquery$': 'jquery/dist/jquery.min.js',
      '^bootstrap$': 'bootstrap-sass/assets/javascrpt/bootstrap.min.js'
    },
    root: path.join(__dirname, 'public')
  }
};
