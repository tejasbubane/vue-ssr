var path = require("path");
var webpack = require("webpack");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.config");

module.exports = merge(baseConfig, {
  entry: "./src/index.js",
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  devtool: "#eval-source-map"
});
