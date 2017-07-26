const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
      mangle: {
        props: false,
      },
    }),
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
      /* images */
      {
        test: /\.(jpg|jpeg|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './assets/[name].[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
};
