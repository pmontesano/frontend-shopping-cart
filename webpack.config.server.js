// webpack.config.server.js
const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  name: 'server',
  entry: {
    server: path.resolve(__dirname, 'src/server/index.js'),
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  externals: [nodeExternals()],
  target: 'node',
  node: {
    __dirname: false,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.server.json',
        },
      },
    ],
  },
};
