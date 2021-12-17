
const { clear } = require('vue-template-label-loader/lib/store');

clear(); // 在每次构建时， 都清空上一次存储信息。

const Timestamp = new Date().getTime();


module.exports = {
  css:{
    requireModuleExtension: true,
    loaderOptions:{
      less:{
        lessOptions:{
          strictMath: false,
          javascriptEnabled: true,
        }
      }
    }
  },
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .set('exclude', [/node_modules/])
      .use('vue-template-label-loader')
      .loader('vue-template-label-loader')
      // .tap(() => {
      //   return {
      //     exclude: [
      //       /App.vue/
      //     ]
      //   }
      // })
      .end()
  },

  configureWebpack: {
    output: {
      filename: `js/[name].${Timestamp}.js`, // 每次构建打包时给文件名加上时间戳，确保每次版本更新的文件名不一样
      chunkFilename: `js/[name].${Timestamp}.js`
    }
  }

  // configureWebpack: (config) => {
  //   config.module.rules.forEach((item) => {
  //     console.log(item);
  //   });
  // },
};