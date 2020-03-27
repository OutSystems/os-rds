const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;
const pkg = require("./package.json");

module.exports = (env, argv) => {
    const isDevelopment = (argv && argv.mode) === "development" ? true : false;

    return {
        mode: isDevelopment ? "development" : "production",
        entry: {
            [pkg.name]: "./src/index.ts"
        },
        output: {
            filename: isDevelopment ? "[name].js" : "[name].[chunkhash].min.js",
            path: `${__dirname}/dist`,
            libraryTarget: "umd",
            library: "OSDS",
            umdNamedDefine: true
        },
        // Enable sourcemaps for debugging webpack's output.
        devtool: isDevelopment ? "eval-source-map" : "none",
        resolve: {
            // Add '.ts', '.tsx', ... as resolvable extensions.
            extensions: [".ts", ".tsx", ".js", ".jsx", ".scss"],
            modules: [__dirname + "/node_modules"]
        },
        resolveLoader: {
            modules: [__dirname + "/node_modules"]
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "ts-loader",
                            options: {
                                transpileOnly: true,
                                experimentalWatchApi: true
                            }
                        }
                    ]
                },
                {
                    test: /\.s(a|c)ss$/,
                    loader: [
                        isDevelopment
                            ? "style-loader"
                            : MiniCssExtractPlugin.loader,
                        "css-loader",
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: isDevelopment
                            }
                        }
                    ]
                },
                {
                    test: /\.(png|svg|jpg|gif|ico)$/,
                    use: [
                        {
                            loader: "url-loader",
                            options: {
                                limit: 5000,
                                fallback: "file-loader"
                            }
                        }
                    ]
                },
                {
                    test: /\.(ttf|eot|woff|woff2|svg)$/,
                    include: /src/,
                    use: {
                        loader: "file-loader",
                        options: {
                            name: "src/style/fonts/[name].[ext]"
                        }
                    }
                }
            ]
        },
        optimization: {
            runtimeChunk: "single",
            splitChunks: {
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendors",
                        enforce: true,
                        chunks: "all"
                    }
                }
            }
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: isDevelopment ? "[name].css" : "[name].[hash].css",
                chunkFilename: isDevelopment ? "[id].css" : "[id].[hash].css"
            }),
            new BundleAnalyzerPlugin({
                analyzerMode: "static",
                openAnalyzer: true,
                generateStatsFile: true,
                reportFilename: "../reports/webpack/report.html",
                statsFilename: "../reports/webpack/stats.json"
            })
        ]
    };
};
