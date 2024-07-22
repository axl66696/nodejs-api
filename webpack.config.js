import nodeExternals from 'webpack-node-externals';
import { dirname,join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// export const target = 'node';
// export const externals = [nodeExternals()];
// export const mode = 'development';
// export const entry = {
//   'index': './index.js',
// };
// export const output = {
//   path: join(__dirname, 'dist'),
//   filename: '[name].bundle.js',
// };
// export const module = {
//   rules: [
//     {
//       test: /\.js$/,
//       exclude: /node_modules/,
//       use: 'babel-loader'
//     },
//   ],
// };

export default {
  target: 'node',
  externals: [nodeExternals()],
  mode: 'development',
  entry: {
    'index': './index.js',
  },
  output: {
    path: join(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
    ],
  },
}