var path = require("path");
var webpack = require("webpack");

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSASS = new ExtractTextPlugin('css/bundle.css');

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
        publicPath: "/public/"
    },
    plugins:[
        jQueryProvidePlugin,
        extractSASS,
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        })
    ],
    module : {
        rules: [
            {
                test: /\.ts$/,
                include: path.resolve(__dirname, "./assets/typescripts"),
                loader: 'ts-loader'
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: "file-loader?name=[name].[ext]&outputPath=css/fonts/&publicPath=/build/"
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    filename: "app.bundle.css",
                    fallback: "style",
                    use: "css-loader"
                })
            },
            {
                test: /\.(sass|scss)$/i,
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
        hints: false
    }
};
