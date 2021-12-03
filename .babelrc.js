module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      './config/babel-plugin-vue-import-component-by-tag',
      {
        lib(tag) {
          // 如果某个标签需要自动导入，请返回导入路径, 不需要则返回null
          if (tag.startsWith('el-')) {
            return `element-ui/lib/${tag.replace('el-', '')}`;
          }
          if (tag.startsWith('a-')) {
            return `ant-design-vue/lib/${tag.replace('a-', '')}`;
          }
        },
        style(tag) {
          // 如果某个标签需要自动样式文件，请返回导入路径，无则返回null
          if (tag.startsWith('el-')) {
            const label = tag.replace('el-', '');
            return `element-ui/lib/theme-chalk/${label}.css`;
          }
          if (tag.startsWith('a-')) {
            const tagName = tag.replace('a-', '');
            return `ant-design-vue/lib/${tagName}/style`;
          }
          return null;
        },
      },
    ],
  ],
};
