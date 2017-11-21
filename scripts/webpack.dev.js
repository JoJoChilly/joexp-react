/**
 * webpack.config.js
 * @author jojochilly
 */
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

process.on('unhandledRejection', err => {
    throw err;
});

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '../public/dist',
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader', // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'less-loader', // compiles Less to CSS
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'react-hot-loader',
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: ['env'],
                            plugins: [
                                'transform-runtime',
                                'transform-class-properties',
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.ttf$|\.eot$|\.svg$/,
                // use: 'file-loader?name=[name].[ext]?[hash]'
                use: 'file-loader?name=[name].[ext]',
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader:
                    'url-loader?limit=10000&mimetype=application/fontwoff&name=[name].[ext]',
            },
        ],
    },
    plugins: [new OpenBrowserPlugin({ url: 'http://localhost:8080' })],
});
