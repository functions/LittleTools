/**
 * configuration description
 * https://github.com/webpack/docs/wiki/configuration#configuration-object-content
 * webpack document
 * http://webpack.github.io/docs/
 */
'use strict'
var path = require('path');
var webpack = require('webpack');
var ProgressPlugin = require('webpack/lib/ProgressPlugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');

//提取css独立成文件
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractSCSS = new ExtractTextPlugin('[name]@[chunkhash].css');


module.exports = {
    //获取项目入口js文件
    entry: {
        "index": "./index.js"
    },
    output: {
        //文件输出目录
        path: path.join(__dirname, 'prd'),
        //根据入口文件输出的对应多个文件名
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.css']
    },
    //各种加载器，即让各种文件格式可用require引用
    module: {
        loaders: [
            {
                test: /\.css$/,
                include: /src\/styles\//,
                loader:  extractSCSS.extract('css-loader?sourceMap&minimize')
            }
        ]
    },
    plugins: [
        // 清空编译后的目录
        new CleanWebpackPlugin(['prd']),
        extractSCSS,
        //js文件的压缩
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        // 根据文件内容生成 MD5
        // new WebpackMd5Hash(),
        new ProgressPlugin(function(percentage, msg) {
            console.log(parseInt(percentage * 100) + '%', msg);
        })
    ]
};