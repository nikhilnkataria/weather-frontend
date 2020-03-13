const path = require('path');
const merge = require('webpack-merge');
const webpackDashboard = require('webpack-dashboard/plugin');

const baseConfig = require('./webpack.base.js');

const devConfig = {
  mode: 'development',
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  devServer: {
    port: 8000,
    overlay: true
  },
  plugins: [ new webpackDashboard() ]
};

module.exports = merge(baseConfig, devConfig);
