const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: '#cheap-module-eval-source-map',
    entry: [
        `webpack-dev-server/client?http://${process.env.npm_package_config_host}:${process.env.npm_package_config_port}`,
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        './src/index.dev'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath:'/static/',
        filename: 'bundle.js'     
    },
    plugins: [
        new webpack.DefinePlugin({
            '__DEV__': true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html', // Load a custom template 
            inject: 'body' // Inject all scripts into the body 
        }),
        // 将指定的文件夹下的文件复制到指定的目录下
        new CopyWebpackPlugin([{
           context:path.resolve(__dirname,'src'),
           from:'libs/**/ */',
           to:path.resolve(__dirname,'dist/static')
        }])
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel?retainLines=true'],
            include: path.join(__dirname, 'src')
        }, {
      test: /\.css$/, // Only .css files
      loader: 'style!css' // Run both loaders
    }]  
    }
};