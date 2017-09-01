module.exports = {
  entry: ['./js/source.js'],
  output: {
    filename: './js/app.js'
  },
  watch: true,
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
          test:/\.html$/,
          loader:'raw-loader'
        }

  ]
}
}
