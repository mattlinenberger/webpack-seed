const path = require('path');
const pkg = require('./package.json');
const metadata = require('./metadata.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
  ],
  /* MODULES */
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
};
