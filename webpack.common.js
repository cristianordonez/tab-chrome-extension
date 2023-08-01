const path = require('path');
const DIST_DIR = path.join(__dirname, '/public');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const BundleAnalyzerPlugin =
   require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
   resolve: {
      extensions: ['.js', '.json', '.ts', '.tsx'],
   },
   entry: {
      popup: `${path.join(__dirname, './src')}/index.tsx`,
      content: `${path.join(
         __dirname,
         './src'
      )}/contentScript/contentScript.ts`,
      background: `${path.join(__dirname, './src')}/background/background.ts`,
   },
   output: {
      filename: '[name].js',
      path: DIST_DIR,
      publicPath: '/',
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
         },
         {
            test: /.s?css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
         },
         {
            //enables webpack to handle images
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
         },
      ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         inject: false,
         title: 'chrome-tab-extension',
         template: 'template.html',
         filename: 'popup.html',
      }),
      new MiniCssExtractPlugin(),
      new ForkTsCheckerWebpackPlugin(),
      new BundleAnalyzerPlugin(),
   ],
};
