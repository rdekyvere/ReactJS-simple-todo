const path = require('path');

module.exports = {
  entry: {
    javascript: "./script.js"
  },

  output: {
    filename: 'transpiled.js',
    path: __dirname + "/dist"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: 'babel-loader',

        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
