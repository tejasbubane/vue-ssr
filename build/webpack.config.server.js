const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const baseConfig = require("./webpack.config.js");
const VueSSRServerPlugin = require("vue-server-renderer/server-plugin");
const path = require("path");

module.exports = merge(baseConfig, {
  // Point entry to your app's server entry file
  entry: "./src/server-entry.js",

  // This allows webpack to handle dynamic imports in a Node-appropriate
  // fashion, and also tells `vue-loader` to emit server-oriented code when
  // compiling Vue components.
  target: "node",

  // For bundle renderer source map support
  devtool: false,

  // This tells the server bundle to use Node-style exports
  output: {
    libraryTarget: "commonjs2",
    path: path.resolve(__dirname, "./dist"),
    filename: "server-build.js"
  },

  // https://webpack.js.org/configuration/externals/#function
  // https://github.com/liady/webpack-node-externals
  // Externalize app dependencies. This makes the server build much faster
  // and generates a smaller bundle file.
  externals: nodeExternals({
    // do not externalize dependencies that need to be processed by webpack.
    // you can add more file types here e.g. raw *.vue files
    // you should also whitelist deps that modifies `global` (e.g. polyfills)
    whitelist: /\.css$/
  })
});
