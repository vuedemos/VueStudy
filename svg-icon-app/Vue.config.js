const path = require('path')

function resolve(dir) {
    return path.join(__dirname, '.', dir)
}

module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('svg')

        config.module
            .rule('svg-sprite-loader')
            .test(/\.svg$/)
            .include
            .add(resolve('src/assets/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
    }
}