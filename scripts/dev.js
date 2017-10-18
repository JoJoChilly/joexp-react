/**
 * webpack.config.js
 * @author jojochilly
 */
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

process.on('unhandledRejection', err => {
    throw err;
});

const path = require('path');
// const webpack = require('webpack');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const config = {
    entry: {
        index: './src/index.js',
        about: './src/about/about.js',
    },
    devServer: {
        contentBase: '../public/dist',
        // hot: true
    },
    output: {
        path: path.resolve('./public/dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
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
    plugins: [
        new NpmInstallPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin('dist', {
            root: path.resolve('./public/'),
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
    ],
};
module.exports = config;
