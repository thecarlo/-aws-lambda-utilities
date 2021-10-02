/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const nodeExternals = require('webpack-node-externals');
const destination = path.resolve(__dirname, 'dist');

let config = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    nodeEnv: false,
  },
  target: 'node',
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'index.min.js',
    path: destination,
  },
  plugins: [],
};

module.exports = (env, argv) => {
  const { mode } = argv;

  config.mode = mode;

  if (mode === 'development') {
    config.devtool = 'source-map';
  }

  return config;
};
