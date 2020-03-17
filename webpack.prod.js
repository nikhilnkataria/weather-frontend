const path = require('path');
const glob = require('glob');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const baseConfig = require('./webpack.base.js');

const prodConfig = {
  mode: 'production',
  devtool: '',
  output: {
    filename: '[name]-[hash:8]-bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin(),
    new PurgecssPlugin({
      paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`, { nodir: true }),
      whitelist: [ 'html', 'body' ]
    })
  ]
};

module.exports = merge(baseConfig, prodConfig);
