var path = require("path");
var webpack = require("webpack");

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSASS = new ExtractTextPlugin('css/[name].css');

const jQueryProvidePlugin  = new webpack.ProvidePlugin({
    jQuery:'jquery',
    $:'jquery',
    jquery:'jquery'
});

module.exports = {
    devtool: 'source-map',
    entry: [
        './assets/typescripts/main.ts',
        './assets/sass/main.scss'
    ],
    output: {
        path: path.join(__dirname, 'public/build'),
        filename: 'scripts/bundle.js',
        publicPath: "/assets/"
    },
    plugins:[
        jQueryProvidePlugin,
        extractSASS
    ],
    module : {
        rules: [
            {
                test: /\.ts$/,
                include: path.resolve(__dirname, "./assets/typescripts"),
                loader: 'ts-loader'
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    filename: "app.bundle.css",
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.scss$/i,
                use: extractSASS.extract(['css-loader', 'sass-loader'])
            }
        ]
    },
    resolve : {
        modules: [
            "node_modules"
        ],
        alias : {
            Vendor$: path.resolve(__dirname, "node_modules")
        },
        extensions: [".webpack.js", ".web.js", ".ts", ".js", ".scss", ".css", ".sass"]
    },
    performance: {
        hints: "error"
    },
    watch: false
};
