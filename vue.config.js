module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://mall-pre.springboot.cn',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    },
    publicPath:'./',
    // outputDir:'dist',
    // assetsDir: "assets",
    // indexPath:'index2.html',
    // lintOnSave:false,
    productionSourceMap: true,
    chainWebpack: (config) => {
        config.plugins.delete('prefetch');
    }
}