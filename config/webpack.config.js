const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin') //每次打包之前清空原来的文件夹



module.exports = {
    // context:path.resolve(__dirname,'../'),
    entry: {
        index: ['./src/index.js'],
        about: ['./src/about.js']
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name][hash].js',
    },
    devtool: 'source-map',//开启调试模式
    devServer: {
        // contentBase: path.resolve(__dirname, '../dist'),
        host:'localhost',
        port:'8090',
        // open:true,//开启浏览器
        // hot:true, //开启热更新

    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: "首页",// 在page/index.html头部模板获取
            chunks: ['index'],
            hash: true,
            template: './pages/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            chunks: ['about'],
            hash: true,
            template: './pages/about.html'
        }),
        new cleanWebpackPlugin({
            path:path.resolve(__dirname, '../dist')//指定需要清空的目录
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
};

