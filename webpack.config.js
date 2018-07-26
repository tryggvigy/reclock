const path = require('path');
const outputDir = path.join(__dirname, "lib", "bundle");

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './lib/es6/src/client/Index.bs.js',
  mode: isProd ? 'production' : 'development',
  output: {
    path: outputDir,
    publicPath: outputDir,
    filename: 'reclock.js',
  },
};
