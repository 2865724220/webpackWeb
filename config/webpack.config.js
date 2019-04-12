const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')


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
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
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
    ]
};
