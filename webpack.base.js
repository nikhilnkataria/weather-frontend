// eslint-disable

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');

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
        loader: 'file-loader',
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
      // CSS file loader to read file and insert in style tag of header
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './'
            }
          },
          'css-loader'
        ]
        // use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './public/css/'
            }
          },
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: true,
      chunksSortMode: 'auto',
      filename: 'index.html',
      // favicon: 'public/favicon.ico',
      template: 'public/index.html'
    }),
    // new DuplicatePackageCheckerPlugin(),
    new MiniCssExtractPlugin({
      // filename: 'public/css/[name]-[hash:8].css',
      // chunkFilename: 'public/css/[name]-[hash:8].chunk.css'
      filename: '[name]-[hash].css',
      chunkFilename: '[id].css'
    })
  ]
};
