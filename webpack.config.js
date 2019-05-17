const path = require("path");

module.exports = {
    entry: {
        "script": "./script-launcher.ts",
        "style": "./style-launcher.ts"
    },
    mode: "production",
    // mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "js")
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".scss"]
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "resolve-url-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.svg$/,
                loader: 'url-loader'
            },
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    }
};