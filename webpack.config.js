var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {  
    mode: process.env.NODE_ENV || "development",
    entry: ["./src/index.tsx"],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    devtool: 'source-map',

    plugins: [
        new HtmlWebpackPlugin({
            title: "sample-react-ts",
            filename: "index.html",
            template: "src/index.html"
        })
    ],

    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {loader: 'ts-loader'}
          ]
        }
      ]
    },
    devServer: {
        open: true,
        contentBase: path.resolve(__dirname, 'dist'),
        port: '8001'
    }
  };