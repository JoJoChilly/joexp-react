const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { ReactLoadablePlugin } = require('react-loadable/webpack');

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
        // new ReactLoadablePlugin({
        //     filename: './dist/react-loadable.json',
        // }),
    ],
    output: {
        path: path.resolve('./public/dist'),
        filename: '[name].bundle.js',
        publicPath: './dist/',
        // path: path.resolve(__dirname, 'public/dist'),
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': path.resolve('src'),
            '@stylesheets': path.resolve('stylesheets'),
        },
        symlinks: false,
    },
};
