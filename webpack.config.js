const path = require('path');
const zlib = require("zlib");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const PATHS = {
  source: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'),
};

module.exports = (env, { mode }) => ({
  entry: `${PATHS.source}/index.ts`,
  output: {
    path: PATHS.dist,
    filename: 'js/index.js',
    sourceMapFilename: '[file].[hash:8].[id].map',
    globalObject: 'this',
    publicPath: '',
    clean: true,
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../',
          },
        }, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimize: mode === 'production',
  },
  devServer: {
    host: 'localhost',
    port: 5100,
    https: true,
    hot: true,
  },
  externals: {
    IDVC: '@idscan/idvc2',
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{
        from: '**/*',
        to: 'networks/[file]',
        toType: 'template',
        context: 'node_modules/@idscan/idvc2/dist/networks/',
      }],
    }),
    new MiniCssExtractPlugin({
      filename: 'css/test.css',
    }),
    new HtmlWebpackPlugin({
      title: 'DVSOnline Wrapper Demo Application',
      inject: 'body',
      template: `${PATHS.source}/index.html`,
    }),
    new CompressionPlugin({
      filename: "[path][base].br",
      algorithm: "brotliCompress",
      test: /\.(js|css|html|svg)$/,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      },
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false,
    }),
  ],
  target: 'web',
});
