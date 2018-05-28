const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        about: './src/about/about.js',
    },
    plugins: [
        new CleanWebpackPlugin('dist', {
            root: path.resolve('./public/'),
        }),
        new HtmlWebpackPlugin({
            title: 'Production',
        }),
    ],
    output: {
        path: path.resolve('./public/dist'),
        filename: '[name].bundle.js',
        publicPath: './',
        // path: path.resolve(__dirname, 'public/dist'),
    },
};
