/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
  }
};