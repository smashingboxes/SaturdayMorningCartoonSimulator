module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader']
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
         test: /\.(jpg|jpeg|gif|png|ico)$/,
         exclude: /node_modules/,
         loader:'file-loader?name=img/[path][name].[ext]&context=./src/images'
      }
    ]
  },
  postcss: function() {
    return [];
  }
};
