module.exports = {
  entry: './main.js',
  output: {
    path: './build',
    publicPath: 'http://test.com/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {test: /\.coffee$/, loader: 'coffee-loader'},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
      {test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  }
};
