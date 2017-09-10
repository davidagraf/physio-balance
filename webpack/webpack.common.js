/*eslint-env node */

var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var rootDir = process.cwd();

module.exports = {
  // eslint: {
  //   configFile: 'public/.eslintrc'
  // },
  context: path.join(__dirname, 'public'),
  entry: ['babel-polyfill', path.join('scripts', 'main.jsx')],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[hash].bundle.js'
  },
  module: {
    rules: [
      // TODO
      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader'
      // },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: "css-loader",
            options: {
              autoprefixer: true,
              sourceMap: true
            }
          }]
        })
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: "css-loader",
            options: {
              autoprefixer: true,
              sourceMap: true
            }
          }, {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            }
          }]
        })
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            plugins: ['transform-object-rest-spread'],
            presets: ['es2015']
          }
        }
      }, {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['transform-object-rest-spread'],
            presets: ['es2015', 'react']
          }
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
    ]
  },
  plugins: [
    // Extract inline css into separate 'style.css'
    new ExtractTextPlugin('[hash].style.css'),
    // new webpack.BannerPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(rootDir, 'public', 'index.html'),
      favicon: path.join(rootDir, 'public', 'imgs', 'logo', 'pb_logo_color_rgb_fav.png'),
      hash: true
    }),
    new webpack.LoaderOptionsPlugin({
      eslint: {
        configFile: 'public/.eslintrc'
      }
    }),
    // tell moment to load a subset of locales only
    new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(en|de|fr|it)$/)
  ],
  resolve: {
    modules: [
      path.join(rootDir, 'public'),
      'node_modules'
    ]
  }
};
