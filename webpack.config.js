const webpack = require('webpack');
require("babel-polyfill");

module.exports = () => ({
    entry: ["babel-polyfill", './src/web/index.web.js'],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }, {
                test: /\.(css|less)$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.(png|jpg|gif|ico)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 2048
                        }
                    }
                ]
            }, {
                test: /\.(woff(2)?|ttf|otf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.web.js', '.js']
    },
    output: {
        path: `${__dirname}/dist`,
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: './dist',
        hot: true
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minChunks: 2
        },
    }
});