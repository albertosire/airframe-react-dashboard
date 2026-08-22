var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
var CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
var TerserPlugin = require('terser-webpack-plugin');
var CircularDependencyPlugin = require('circular-dependency-plugin');

var config = require('./../config');

var BASE_PATH = process.env.BASE_PATH || '/';

module.exports = {
    devtool: 'source-map',
    mode: 'production',
    entry: {
        app: [path.join(config.srcDir, 'index.js')]
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
        path: config.distDir,
        publicPath: BASE_PATH,
        clean: true,
    },
    resolve: {
        modules: [
            'node_modules',
            config.srcDir
        ],
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new CircularDependencyPlugin({
            exclude: /a\.js|node_modules/,
            failOnError: true,
            allowAsyncCycles: false,
            cwd: process.cwd(),
        }),
        new HtmlWebpackPlugin({
            template: config.srcHtmlLayout,
            inject: false
        }),
        new ExtractCssChunks(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            'process.env.BASE_PATH': JSON.stringify(BASE_PATH),
        })
    ],
    optimization: {
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
        ],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: config.srcDir,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    ExtractCssChunks.loader,
                    { 
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                        }
                    },
                    { loader: 'postcss-loader' }
                ],
                exclude: [path.resolve(config.srcDir, 'styles')],
                include: [config.srcDir]
            },
            {
                test: /\.scss$/,
                use: [
                    ExtractCssChunks.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                        }
                    },
                    { loader: 'postcss-loader' },
                    { loader: 'sass-loader' }
                ],
                exclude: [path.resolve(config.srcDir, 'styles')],
                include: [config.srcDir]
            },
            {
                test: /\.css$/,
                use: [
                    ExtractCssChunks.loader,
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader' }
                ],
                include: [path.resolve(config.srcDir, 'styles')]
            },
            {
                test: /\.scss$/,
                use: [
                    ExtractCssChunks.loader,
                    { loader: 'css-loader' }, 
                    { loader: 'postcss-loader' }, 
                    { loader: 'sass-loader' }
                ],
                include: [path.resolve(config.srcDir, 'styles')]
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]',
                },
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg|ico)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/[name][ext]',
                },
            }
        ]
    },
    devServer: {
        hot: false,
        static: {
            directory: config.distDir,
        },
        compress: true,
        historyApiFallback: {
            index: '/'
        },
        host: '0.0.0.0',
        port: 4100
    }
}
