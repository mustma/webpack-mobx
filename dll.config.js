const webpack = require('webpack')

const vendors = [
  'react',
  'react-dom',
  'react-router',
  'mobx',
  'mobx-react'
]

module.exports = {
  entry: {
    "vendor": vendors,
  },
  output: {
    path: 'build/js',
    filename: '[name].dll.js',
    library: '[name]_library',
  },
  
  plugins: [
    new webpack.DllPlugin({
      path: 'manifest.json',
      name: '[name]_library',
      context: __dirname
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
  ]
}
