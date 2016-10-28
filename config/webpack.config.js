var path = require('path');

// for prod builds, we have already done AoT and AoT writes to disk
// so read the JS file from disk
// for dev buids, we actually want to pass in .ts files since we
// don't have .js files on disk, they're exclusively in memory

function getEntryPoint() {
  if (process.env.IONIC_ENV === 'prod') {
    return '{{TMP}}/app/main.prod.js';
  }
  return '{{SRC}}/app/main.dev.ts';
}

module.exports = {
  devtool: 'source-map',
  entry: getEntryPoint(),
  output: {
    path: '{{BUILD}}',
    devtoolModuleFilenameTemplate : '[resource-path]',
    filename: 'main.js',
  },

  module: {
    loaders: [
    ]
  }
};