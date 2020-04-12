// eslint-disable
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './src/index.jsx'
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  module: {
    rules: [
      // JS & JSX File loaders
      {
        test: /\.(js|jsx)/,
        use: [
          // babel transpiler
          {
            loader: 'babel-loader',
            options: {
              presets: [ '@babel/react', '@babel/env' ],
              plugins: [
                '@babel/proposal-class-properties',
                '@babel/proposal-object-rest-spread'
              ]
            }
          },
          // eslint validation
          { loader: 'eslint-loader' }
        ],
        exclude: /node_modules/
      },
      // Image loader
      {
        test: /\.(png|jpe?g)$/i,
        loader: 'url-loader',
        options: {
          name() {
            return process.env.NODE_ENV === 'development'
              ? '[path][name].[ext]'
              : '[contenthash:8].[ext]';
          },
          outputPath: './public/images/'
        }
      },
      // Font file loader
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './public/fonts/'
            }
          }
        ]
      },
      // SCss/Css file loader to read file and insert in style tag of header
      {
        test: /\.(sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      collapseWhitespace: true,
      chunksSortMode: 'auto',
      filename: 'index.html',
      favicon: 'public/favicon.ico',
      template: 'public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name]-[hash:8].css',
      chunkFilename: '[id].css'
    }),
    // Ignore all locale files of moment.js
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
};
