module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {text: /\.coffee$/, loader: 'coffee-loader'}
    ]
  }
};
