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
    path: path.join(__dirname, 'dist', 'preview'),
    filename: '[hash].bundle.js'
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
        test: /\.(l20n|png|jpg|jpeg)$/,
        loader: 'file-loader?name=[path][hash][name].[ext]'
      }, {
        test: /\.(pdf|docx)$/,
        loader: 'file-loader?name=[path][name].[ext]'
      }
    ],
    noParse: [
      // new RegExp('react-dom.min.js'),
      // new RegExp('react.min.js')
    ]
  },
  plugins: [
    // Extract inline css into separate 'style.css'
    new ExtractTextPlugin('[hash].style.css'),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      favicon: path.join(__dirname, 'public', 'imgs', 'logo', 'pb_logo_color_rgb_fav.png'),
      hash: true
    }),
  ],
  resolve: {
    alias: {
      // 'react-dom$': 'react-dom/dist/react-dom.min.js',
      // react$: 'react/dist/react.min.js'
    },
    root: path.join(__dirname, 'public')
  }
};
