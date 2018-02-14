var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
    entry: [ APP_DIR + '/index.js' ],
    output: {
        filename: 'bundle.js'
    },
    watch: true,
    module : {
        loaders: [
            {
                test : /\.js?/,
                include : APP_DIR,
                loader : 'babel-loader'
            }
        ]
    }
};