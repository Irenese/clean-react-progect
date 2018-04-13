let path = require('path');
const webpack = require('webpack');
const publicPath = 'public';
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: "body"
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),

  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '/public'),
  },
  module: {
    rules: [
      {
        test: /\.css$/, use: ['style-loader', 'css-loader'],
        //Follow instructions at https://github.com/roylee0704/react-flexbox-grid
      },
      {
        test: /\.scss$/,
        loader: "css-loader!sass-loader"
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.js|.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }]
  },
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    hot: true

  },

}