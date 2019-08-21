const path = require('path');

function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: './',
  devServer: {
    // can be overwritten by process.env.HOST
    host: '0.0.0.0',  
    port: 8080
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('src', resolve('src'))
      .set('components', resolve('src/components'));
    // icons文件夹下的svg图片处理
    // 先取消之前svg规则中对icons文件夹的处理
    // 再添加新的规则icons对icons文件夹中的svg进行处理
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        // 和组件中返回的名称保持一致
        symbolId: 'icon-[name]'
      });
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        win: {
          icon: './public/app.ico'
        },
        mac: {
          icon: './public/app.icns'
        },
        extraResources: [
          {
            from: './config/user.js',
            to: './config/user.js'
          }
        ],
        productName: 'AppDemo'
      }
    }
  }
}
