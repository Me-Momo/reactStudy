# use webpack + react 

## 安装

安装`react`和`webpack`以及其他loaders等等依赖包
```bash
npm install babel-loader babel-core babel-preset-react babel-preset-es2015 --save-dev
npm install react react-dom --save
npm install webpack  --save-dev
```

## 简单配置

配置`webpack.config.js`文件

```javascript
const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: ['./src/main.js'], // 入口文件
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{ // loaders, 解析jsx语法和es6语法
            test: /\.jsx?$/,
            loaders: ['babel-loader?presets[]=es2015,presets[]=react'],
            exclude: /node_modules/
        }]
    },
    plugins: [
        // 将脚本自动插入 html 模版
        new HtmlWebpackPlugin({
            template: 'index.html', // Load a custom template 
            inject: 'body' // Inject all scripts into the body 
        }),
    ],
};
```

## 开发模式下的 配置

配置 `webpack.config.dev.js` 

* 命令行下使用webpack-dev-server 在 localhost:8080 建立一个 Web 服务器；--devtool eval 映射编译好的源码，用于调试；--progress 显示代码打包进度；--colors 表示在命令行中显示颜色； --content-base 来指定 server 启动后的内容目录
* 配置 `devServer.js`文件
```javascript
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.dev');

const port = process.env.npm_package_config_port || 3000;
const host = process.env.npm_package_config_host || 'localhost';

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true,
        chunks: false,
        'errors-only': true
    }
}).listen(port, host, function (err) {
    if (err) {
        console.log(err);
    }

    console.log(`Listening at http://${host}:${port}/`);
});
```
命令行输入一下命令，浏览器打开 `http://localhost:3000`
```
node devServer.js
```

### 添加react热更新

```javascript
npm install react-hot-loader@next
```
配置 .babelrc
```javascript
{
  "presets": [
    ["es2015", {"modules": false}],
    // webpack 现在已经支持原生的 import 语句了, 并且将其运用在 tree-shaking 特性上

    "react"
    // 转译 React 组件为 JavaScript 代码
  ],
  "plugins": [
    "react-hot-loader/babel"
    // 开启 React 代码的模块热替换(HMR)
  ]
}
```
配置 `webpack.config.dev.js` 文件

```javascript
  entry: [
    `webpack-dev-server/client?http://localhost:3000`,
    'webpack/hot/dev-server',
    'react-hot-loader/patch',// 开启 React 代码的模块热替换(HMR)
    './src/main'
  ],
```
### 添加 自动打开chrome浏览器

使用`open-browser-webpack-plugin`插件

```javascript
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.export = {
//...
    plugins: [
        // other arguments: DOC(https://www.npmjs.com/package/open-browser-webpack-plugin)
        new OpenBrowserPlugin({url: 'http://localhost:3000/',browser:'Google Chrome'})
    ]
//...
}
```


DEMO 的一些介绍

```jsx
render(){
    // 先使用一个todoItems 存放渲染元素
    // jsx 语法为了防止 xss 脚本注入：会对html代码进行转义，要插入 html 片段，可以使用以下方式 
    // 注意 : 双大括号，第二个表示对象 {__html:'html 片段'}
    const todoItems = this.state.todoItems.map(function(item,index) {
         return (
                <li key={item.id}>{ item.done?"☑️":"✖️"  }<span dangerouslySetInnerHTML={{ __html : '&nbsp;' }}></span>{ item.name }</li>
            )
        });  
    return (
        <ul style={{ listStyle: "none"}}>{ todoItems }</ul>
    )
}
 
```