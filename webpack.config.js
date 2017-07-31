var path = require("path");
var webpack = require("webpack");

module.exports = {
    devtool: 'source-map',
    entry: ['./assets/typescripts/main.ts'],
    output: {
        path: path.resolve(__dirname, 'public/js/build'),
        filename: 'app.js'
    },
    plugins:[
        new webpack.ProvidePlugin({
            jQuery:'jquery',
            $:'jquery',
            jquery:'jquery'
        })
    ],
    module : {
        loaders: [{
            test: /\.ts$/,
            include: path.resolve(__dirname, "assets/typescripts"),
            loader: 'ts-loader'
        }]
    },
    resolve : {
        extensions: [".webpack.js", ".web.js", ".ts", ".js"]
    }
};
