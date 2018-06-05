const path = require("path");
var webpack = require("webpack");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(baseConfig, {
  entry: "./src/client-entry.js",
  mode: "production",
  devtool: "#source-map",
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "bundle-[hash].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "VueJS SSR",
      template: "index.template.html"
    })
  ]
});
