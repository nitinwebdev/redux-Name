const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    entry:'index.js',
    output:{
path:_dirname +'/dist',
filename: 'index_bundle.js'
    },
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
