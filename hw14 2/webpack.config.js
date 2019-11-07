const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/main.js',
   mode: 'production',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
   },
   watchOptions: {
      ignored: /node_modules/
   },
   module:{
      rules: [
         {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
         },
         {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
         },
      ],
   },
   plugins: [
      new ExtractTextPlugin("styles.css"),
      new HtmlWebpackPlugin()
  ]
};

