module.exports = {
  entry: './frontend/entry.jsx',
  output: {
    path: 'build',
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    inline: true
  }
};
