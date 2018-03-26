const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './app/javascripts/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js'
  },
  plugins: [
    // Copy our app's index.html to the build folder.
    new CopyWebpackPlugin([
      //{ from: './Frontend/orders.html', to: "orders.html" },
      //{ from: './Frontend/add.html', to: "add.html"},
      //{ from: './Frontend/addShipment.html', to: "addShipment.html"},
      { from: './Frontend/Shipments.html', to: "Shipments.html"},
      { from: './Frontend/container.html', to: "container.html"},
      { from: './Frontend/carrierAddContract.html', to: "carrierAddContract.html"},
      { from: './Frontend/carrierAddShipment.html', to: "carrierAddShipment.html"},
      { from: './Frontend/client.html', to: "client.html"},
      { from: './Frontend/lsp.html', to: "lsp.html"},
      { from: './Frontend/terminal.html', to: "terminal.html"},
      

    ])
  ],
  module: {
    rules: [
      {
       test: /\.css$/,
       use: [ 'style-loader', 'css-loader' ,]
      }
    ],
    loaders: [
      { test: /\.json$/, use: 'json-loader' },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['transform-runtime']
        }
      }
    ]
  }
}
