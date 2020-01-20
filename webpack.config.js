const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.jsx"), 
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },

  plugins: [
    new HtmlWebpackPlugin({template: path.resolve(__dirname, "src", "index.html"),})
  ],

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            include: path.resolve(__dirname, "src"),
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
              presets: ['@babel/env', '@babel/react'],
            }
        },
    ],
  },
}