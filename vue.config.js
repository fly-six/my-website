const webpack = require('webpack')
module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js'
        }
    },
    　　chainWebpack: (config) => {　　　　 config.plugin('provide').use(webpack.ProvidePlugin, [{　　　　 $: 'jquery', 　　　　jquery: 'jquery', 　　　　jQuery: 'jquery', 　　　　 'window.jQuery': 'jquery'　　　　 }])　　 },
    　　css: {　　　　 sourceMap: true　　 },
    // 关闭语法检查
    lintOnSave: false,
    devServer: {
        proxy: {
            '/admin': {
                //代理api
                target: 'http://dev-market.zgzhongnan.com:9001', // 代理接口(注意只要域名就够了)
                changeOrigin: true, //是否跨域
                ws: true, // 是否支持 websockets
                pathRewrite: {
                    //重写路径
                    '^/admin': '' //代理路径
                }
            }
        }
    }
}