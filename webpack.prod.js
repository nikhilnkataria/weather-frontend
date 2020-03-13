const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const baseConfig = require('./webpack.base.js');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name]-[hash:8]-bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [new CleanWebpackPlugin()]
};

module.exports = merge(baseConfig, prodConfig);
