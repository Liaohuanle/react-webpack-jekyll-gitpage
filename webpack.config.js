const webpack = require('webpack');
const path = require('path');
const CURRENT_PATH = path.resolve(__dirname); // 获取到当前目录
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const ROOT_PATH = path.join(__dirname, './src'); // 项目根目录
const MODULES_PATH = path.join(ROOT_PATH, './node_modules'); // node包目录
const BUILD_PATH = path.join(ROOT_PATH, './'); // 最后输出放置公共资源的目录

const port = 9002

module.exports = {
  context: CURRENT_PATH,
  entry: [
    'webpack/hot/dev-server',
    `webpack-dev-server/client?http://localhost:${port}`,
    path.resolve(__dirname, './src/index.js')
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './',
    port
  },
  output: {
    path: BUILD_PATH, // 设置输出目录
    filename: 'app.js', // 输出文件名
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.coffee','.ts','tsx'] // 配置简写，配置过后，书写该文件路径的时候可以省略文件后缀
  },
  module: {
    loaders: [
      // style & css & less loader
      { test: /\.css$/, loader: "style-loader!css-loader"},
      { test: /\.less$/, loader: "style-loader!css-loader!less-loader"},
      // babel loader
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: ['babel-loader'],
        query: {
          presets: ['react', 'es2015']
        }
      },
      // image & font
      { test: /\.(woff|woff2|eot|ttf|otf)$/i, loader: 'url-loader?limit=8192&name=[name].[ext]'},
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url-loader?limit=8192&name=[name].[ext]'},
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      except: ['$super', '$', 'exports', 'require']
    }),
    new HtmlWebpackPlugin({
      title:'LUSHEN',
      filename: 'index.html',
      template: './index.html',
      inject: true,
      hash: true,
      minify:{
        removeComments:true,
        collapseWhitespace:true
      }
    }),
    new OpenBrowserPlugin({
      url: `http://localhost:${port}`
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
