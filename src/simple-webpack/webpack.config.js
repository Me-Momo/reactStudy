const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: ['./src/main.js'],
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel-loader?presets[]=es2015,presets[]=react'],
            exclude: /node_modules/
        }]
    },
    plugins: [
        // [DOC]: http://www.jianshu.com/p/c0e1fc31940b
        // new HtmlWebpackPlugin({
        //     template: 'index.html', // Load a custom template 
        //     inject: 'body' // Inject all scripts into the body 
        // }),
    ],
};