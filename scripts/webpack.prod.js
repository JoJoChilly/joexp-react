/**
 * webpack.config.js
 * @author jojochilly
 */
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

process.on('unhandledRejection', err => {
    throw err;
});

const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// TODO: when production
//
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractLess = new ExtractTextPlugin({
    filename: '[name].css',
});

const config = merge(common, {
    module: {
        rules: [
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: extractLess.extract({
                    use: [
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'less-loader',
                        },
                    ],
                }),
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
                use: 'file-loader?name=[name].[ext]',
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader:
                    'url-loader?limit=10000&mimetype=application/fontwoff&name=[name].[ext]',
            },
        ],
    },
    plugins: [
        extractLess,
        new UglifyJSPlugin({
            sourceMap: true,
        }),
    ],
});
module.exports = config;
