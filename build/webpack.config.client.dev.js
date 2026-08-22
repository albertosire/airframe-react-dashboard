var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CircularDependencyPlugin = require("circular-dependency-plugin");
var ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
var ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

var config = require("./../config");

var BASE_PATH = process.env.BASE_PATH || "/";

module.exports = {
  name: "client",
  devtool: "eval-cheap-module-source-map",
  target: "web",
  mode: "development",
  entry: {
    app: [path.join(config.srcDir, "index.js")],
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js",
    path: config.distDir,
    publicPath: BASE_PATH,
    clean: false,
  },
  resolve: {
    modules: ["node_modules", config.srcDir],
    extensions: [".js", ".jsx"],
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
      inject: false,
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
      "process.env.BASE_PATH": JSON.stringify(BASE_PATH),
    }),
    new ReactRefreshWebpackPlugin(),
    new ExtractCssChunks(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          { loader: "postcss-loader" },
        ],
        exclude: [path.resolve(config.srcDir, "styles")],
        include: [config.srcDir],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          { loader: "postcss-loader" },
          { loader: "sass-loader" },
        ],
        exclude: [path.resolve(config.srcDir, "styles")],
        include: [config.srcDir],
      },
      {
        test: /\.css$/,
        use: [ExtractCssChunks.loader, "css-loader", "postcss-loader"],
        include: [path.resolve(config.srcDir, "styles")],
      },
      {
        test: /\.scss$/,
        use: [
          ExtractCssChunks.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
        include: [path.resolve(config.srcDir, "styles")],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg|ico)$/,
        type: "asset/resource",
        generator: {
          filename: "static/[name][ext]",
        },
      },
    ],
  },
  devServer: {
    hot: true,
    static: {
      directory: config.serveDir,
    },
    compress: true,
    historyApiFallback: {
      index: BASE_PATH,
    },
    host: "0.0.0.0",
    port: 4100,
  },
};
