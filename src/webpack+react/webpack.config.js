const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: ['./src/main.js'],
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader',query: {presets: ['es2015']} },
            // { test: /\.jsx$/, loader: 'jsx-loader' },
            // {
            //     test: /\.js?$/,
            //     loaders: ['babel-loader?retainLines=true'],
            //     include: path.join(__dirname, 'src')
            // },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'react-hot-loader!jsx-loader?harmony'
            }
        ]
    },
    plugins: [
        // [DOC]: http://www.jianshu.com/p/c0e1fc31940b
        new HtmlWebpackPlugin({
            template: 'index.html', // Load a custom template 
            inject: 'body' // Inject all scripts into the body 
        }),
    ],
};