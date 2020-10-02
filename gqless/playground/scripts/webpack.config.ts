import * as path from 'path'
import { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import { getAliasForProject } from '@microsoft/webpack-project-references-alias'
import WebpackBarPlugin from 'webpackbar'

const dir = path.join(__dirname, '..')

const config: Configuration = {
  context: dir,
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index',
  output: {
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: getAliasForProject(dir),
  },
  stats: {
    warnings: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          projectReferences: true,
          transpileOnly: true,
        },
      },
    ],
  },
  plugins: [
    new WebpackBarPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    // new ForkTsCheckerWebpackPlugin({
    //   typescript: {
    //     build: true,
    //     tsconfig: path.join(dir, 'tsconfig.json'),
    //   },
    // }),
  ],
  // @ts-ignore
  devServer: {
    clientLogLevel: 'silent',
  },
}

export default config
