const PRODUCTION_NODE_ENV = "production";
module.exports = {
    chainWebpack: config => {
        config.entry = {
            main: "./src/main.js"
        };
    },
    configureWebpack: {
        output: {
            libraryExport: "default"
        },
        performance: {
            hints:'warning'
        }
    },
    outputDir: process.env.NODE_ENV === PRODUCTION_NODE_ENV ? 'lib' : 'dist',
    css: {
        sourceMap: process.env.NODE_ENV !== PRODUCTION_NODE_ENV
    },
    productionSourceMap: process.env.NODE_ENV !== PRODUCTION_NODE_ENV,
    devServer: {
        disableHostCheck: true
    }
};
