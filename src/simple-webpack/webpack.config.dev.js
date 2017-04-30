const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'),
  OpenBrowserPlugin = require('open-browser-webpack-plugin');
/**
 * There is no inline: true flag in the webpack-dev-server configuration,
 *  because the webpack-dev-server module has no access to the webpack configuration. 
 * Instead, the user must add the webpack-dev-server client entry point to the webpack configuration.
 * 
 */
module.exports = {
  devtool: '#cheap-module-eval-source-map',
  entry: [
    `webpack-dev-server/client?http://localhost:8080`,
    'webpack/hot/dev-server',
    'react-hot-loader/patch',// 开启 React 代码的模块热替换(HMR)
    './src/main'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      scss:path.resolve(__dirname,'src/scss')
    }
  },
  module: {
    loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel-loader?presets[]=es2015,presets[]=react'],
            exclude: /node_modules/
        },{
            test: /\.css$/, // Only .css files
            loader: 'style!css' // Run both loaders
        },{
            test:/.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        }]
  },plugins: [
    new webpack.DefinePlugin({
      '__DEV__': true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html', // Load a custom template
      inject: 'body' // Inject all scripts into the body 
    }),
    new OpenBrowserPlugin({url: 'http://localhost:8080/',browser:'Google Chrome'})
  ]
};
