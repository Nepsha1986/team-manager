const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
  let curEnv = argv.mode === 'production' ? 'production' : 'development';

  return {
    mode: curEnv,
    entry: './src/index.tsx',

    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html'
      }),
      new webpack.ProgressPlugin(),
      new MiniCssExtractPlugin({filename: 'main.[chunkhash].css'})
    ],

    module: {
      rules: [
        {
          test: /\.(jsx|js|tsx|ts)$/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: [
                  '@babel/preset-env',
                  '@babel/preset-react'
                ]
              }
            },
            {
              loader: 'ts-loader',
            },
          ],
          include: [path.resolve(__dirname, 'src')],
          exclude: [/node_modules/]
        },
        {
          test: /.(scss|css)$/,
          use: [
            curEnv === 'production' ? {
              loader: MiniCssExtractPlugin.loader
            } : {
              loader: "style-loader"
            },
            {
              loader: "css-loader",

              options: {
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",

              options: {
                sourceMap: true
              }
            }
          ]
        }]
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      /*
      * Also should be synced in tsconfig.json to work properly with IDEA.
      * */
      alias: {
        "@": path.resolve(__dirname, 'src'),
        "@main-styles": path.resolve(__dirname, 'src/styles/main.scss'),
        "@primitives": path.resolve(__dirname, 'src/components/primitives'),
        "@blocks": path.resolve(__dirname, 'src/components/blocks'),
        "@templates": path.resolve(__dirname, 'src/components/templates'),
        "@pages": path.resolve(__dirname, 'src/components/pages'),
      },
    },

    optimization: {
      minimizer: [new TerserPlugin()],

      splitChunks: {
        cacheGroups: {
          vendors: {
            priority: -10,
            test: /[\\/]node_modules[\\/]/
          }
        },

        chunks: 'async',
        minChunks: 1,
        minSize: 30000,
        name: false
      }
    }
  }
};
