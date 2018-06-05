var path = require("path");
var webpack = require("webpack");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(baseConfig, {
  entry: "./src/client-entry.js",
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  devtool: "#eval-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "VueJS SSR",
      template: "index.template.html"
    })
  ]
});
