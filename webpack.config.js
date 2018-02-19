var path = require("path");
var webpack = require("webpack");
var CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "remotejs-loader",
    libraryTarget: "umd"
  },
  devtool: "cheap-module-source-map",
  context: path.resolve(__dirname, "src"),
  resolve: {
    extensions: [".js"],
    modules: [path.resolve(__dirname, "node_modules")]
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: ["babel-loader"],
        include: path.resolve("src")
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin("dist"),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    })
  ]
};
