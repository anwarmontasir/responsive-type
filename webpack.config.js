/* eslint-env node */
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  // our starting point for our JavaScript
  // (everything is tracked by being required, or 'imported')
  entry: './src/main.js',
  // what do we want to call the output, and where do we want to put it?
  output: {
    filename: 'bundle.js',
    // this path is for npm run build
    // npm start (webpackdev server) runs in a temp folder
    path: `${__dirname}/build`
  },
  // gives us source maps
  // (we debug code we wrote, not what ends up getting built)
  devtool: 'inline-source-map',
  // plugins add high-level functionality to webpack
  plugins: [
    // cleans the build directory on each build
    // new cleanWebpackPlugin(`$__dirname}/build`),
    // create an index.html based on our template
    // will add in <script> to bundle.js
    new htmlPlugin({ template: './src/index.html' })
  ],
  module: {
    // 'loaders' tell webpack how to require (or import) things
    rules: [
      {
        test: /.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          // dynamically put CSS into style tag of document head
          {
            loader: 'style-loader',
            options: { sourceMap: true }
          },
          // turns CSS into JS that exports CSS as a string
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          // allow nested CSS and auto-prefix
          // browser-specific CSS properties
          {
            loader: 'postcss-loader',
            options: { sourceMap: true }
          }
        ]
      },
      // load images
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: 'url-loader',
          // default is to inline image content via base64 encoding
          // if file is bigger than this limit, create a 'real' file
          options: {
            limit: 5000
          }
        }
      }
    ]
  }
};