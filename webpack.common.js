const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/layouts/index.html'
    })],
    module: {
        rules: [{
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.(svg|png|jpe?g)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name].[hash].[ext]'
                }
            }
        ]
    }
}