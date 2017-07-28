const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const pkg = require('./package.json');
const metadata = require('./metadata.json');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: `${pkg.name}.[hash].js`,
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  /* PLUGINS */
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      data: metadata,
    }),
    new ExtractTextPlugin({
      filename: `./css/${pkg.name}.[hash].css`,
    }),
    new webpack.optimize.UglifyJsPlugin({
      minify: true,
      sourceMap: true,
      mangle: false,
    }),
    new CleanWebpackPlugin([
      'dist/',
    ], {}),
  ],
  /* MODULES */
  module: {
    rules: [
      /* javascript */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env'],
            },
          },
          {
            loader: 'eslint-loader',
          },
        ],
      },
      /* CSS */
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader',
          ],
        }),
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?sourceMap',
      },
      {
        test: /\.handlebars$/,
        loader: 'handlebars-loader',
        query: {
          partialDirs: [
            path.join(__dirname, 'src', 'html', 'templates', 'partials'),
          ],
        },
      },
      /* images */
      {
        test: /\.(jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './assets/[name].[hash].[ext]',
            },
          },
        ],
      },
      /* font-awesome */
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
        options: {
          name: './fonts/[name].[ext]',
        },
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
        options: {
          name: './fonts/[name].[ext]',
        },
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
        options: {
          name: './fonts/[name].[ext]',
        },
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: './fonts/[name].[ext]',
        },
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
        options: {
          name: './fonts/[name].[ext]',
        },
      },
    ],
  },
};
