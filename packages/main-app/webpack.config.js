const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const dependencies = require("./package.json");
module.exports = {
  entry: "./index.js",
  mode: "development",
  devtool: "hidden-source-map",
  devServer: {
    hot: false,
    static: path.join(__dirname, "dist"),
    port: 3002,
    historyApiFallback: {
      index: "index.html",
    },
  },
  output: {
    publicPath: "http://localhost:3002/",
    clean: true,
  },
  resolve: {
    extensions: [
      ".jsx",
      ".js",
      ".json",
      ".css",
      ".scss",
      ".jpg",
      "jpeg",
      "png",
    ],
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        loader: "url-loader",
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "main_app",
      remotes: {
        "component-app": "component_app@http://localhost:3001/remoteEntry.js",
        // I add files to our S3 manually to check if it's working
        "payments-app": "payments_app@http://localhost:3003/remoteEntry.js",
      },
      shared: {
        "react-router-dom": {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
        react: {
          singleton: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
