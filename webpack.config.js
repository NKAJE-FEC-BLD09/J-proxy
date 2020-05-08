const webpack = require('webpack');

module.exports = {
  entry: __dirname + "/src/index.jsx",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            "presets": [
              "@babel/preset-env", "@babel/preset-react", 
            ],
            "plugins": [
              "@babel/plugin-syntax-class-properties", "@babel/plugin-proposal-class-properties",
            ],
            "cacheDirectory": true
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};