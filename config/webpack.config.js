const path = require('path')

module.exports = {
    context:path.resolve(__dirname,'../'),
    entry: {
      app: ['./src/index.js'],
      about: ['./src/about.js']
    },
    output: {

      path: path.resolve(__dirname,'dist'),
      filename: '[name].js',
    }
  };
