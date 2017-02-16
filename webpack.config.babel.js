'use strict';

// import Webpack plugins
const cleanPlugin = require('clean-webpack-plugin');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

// define Webpack configuration object to be exported
let config = {
    context: `${__dirname}/app`,
    entry: './app.module.js',
    output: {
        path: `./public`,
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
          'npm': `${__dirname}/node_modules`
        }
    },
    devtool: NODE_ENV === 'development'  ? 'cheap-module-source-map' : '',
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(eot|svg|ttf)$/,
                loader: 'file'
            },
            {
                test: /\.js?$/,
                include: `${__dirname}/app`,
                loaders: ['babel']
            },
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]'
            },
        ],
        preLoaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            }
        ]
    },
    plugins: [
        new ngAnnotatePlugin({
            add: true
        })
    ],
    devServer: {
        host: 'localhost',
        port: '8080',
        contentBase: './public'
    }
};

if(NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        }))
};

module.exports = config;

