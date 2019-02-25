module.exports = {
    entry : ['babel-polyfill','./app/index.js'],
    output: {
        path: __dirname+'/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            use : 'babel-loader',
            test: /\.js$/,
            exclude : /node_modules/
        }]
    }

}