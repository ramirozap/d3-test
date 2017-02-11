const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/main.js',
  output: {
    path: '/dist',
    filename: 'app.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'app'),
    inline: true,
    port: 5000,
  },
  module: {
   rules: [
     {
       test: /.js$/,
       loader: 'babel-loader',
       exclude: /node_modules/,
       options: {
         presets: ['es2015']
       }
     },
     {
       test: /\.css$/,
       loader: ExtractTextPlugin.extract('css')
     }
   ]
 },
 plugins: [
   new ExtractTextPlugin({
     filename: 'style.css',
     allChunks: true
   }),
   new HtmlWebpackPlugin({
     template: 'app/index.html',
     inject: true
   })
 ]
}
