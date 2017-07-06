const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Root helper function
const root = function (args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
};

const package = require('./package.json');

// Extraction plugin definitions
const extractCSS = new ExtractTextPlugin(package.name + '[hash].css');

module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: root('dist'),
    filename: package.name + ".[hash].bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          },
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.scss$/,
        use: extractCSS.extract(['css-loader', 'sass-loader']),
      },
      {
        test: /\.handlebars$/,
        loader: "handlebars-loader",
        query: {
          partialDirs: [
            path.join(__dirname, 'src', 'html', 'templates', 'partials')
          ]
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    extractCSS,
    // new UglifyJSPlugin()
  ]
};