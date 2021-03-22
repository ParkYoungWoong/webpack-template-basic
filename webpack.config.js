const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './js/main.js',
  output: {
    // 기본값!
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: './index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
    })
  ],
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true
  }
}