const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const workspace = require('./workspace.config')
const { isDev } = require('./scripts/environment')
const generateEntries = require('./scripts/webpack.glob.entries')

module.exports = {
  stats: isDev() ? 'errors-only' : 'summary',
  devtool: isDev() ? 'eval' : false,
  entry: isDev() ? './src/index.tsx' : generateEntries('src/components/*/index.+(tsx|ts|js|jsx)'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: workspace.alias
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/index.js',
    libraryTarget: 'umd',
    library: '[name]',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      protectWebpackAssets: false
    }),
    isDev() && new HtmlWebpackPlugin({
      templateContent: `
        <html>
          <body>
            <div id="root"></div>
          </body>
        </html>
      `
    })
  ].filter(Boolean),
};