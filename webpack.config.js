const path = require('path');

module.exports = {
  mode:"production",
  entry: {
    app:{
      import:"./src/app.js",
      dependOn:'shared'
    },
    shared:'jquery'

  },
 output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
};