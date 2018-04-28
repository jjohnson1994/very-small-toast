const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./index.html",
  filename: "./index.html"
});

module.exports = merge(common, {
  mode: 'development',

  devServer: {
    overlay: true,
  },

  module: {
    rules: [
      {
        test: /\.scss/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
    ]
  },

  output: {
    filename: 'dev.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [ htmlPlugin ]
});