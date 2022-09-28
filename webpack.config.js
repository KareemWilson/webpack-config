const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { LoaderOptionsPlugin } = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'heloo.js',
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
         title: 'output management',
         template: './index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            }
        ]
    },
    devServer: {
        static: './dist',
    },
}