const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
   mode: 'production',
   watch: true,
   optimization: {
      runtimeChunk: false,
      minimize: false,
      usedExports: true,
      minimizer: [
         new TerserPlugin({
            terserOptions: { format: { comments: false } },
            extractComments: false,
            parallel: true,
         }),
         new CssMinimizerPlugin(),
      ],
   },
});
