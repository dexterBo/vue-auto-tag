function isCapitalStart(string) {
  if (!string) {
    return false
  }
  const first = string[0];
  const reg = new RegExp(/[A-Z]/);
  return reg.test(first);
}


function toLine(string) {
  return string.replace(/([A-Z][a-z]*)([A-Z][a-z]*)/g,"$1-$2").toLowerCase();
}

function kebabCase(str) {
  var hyphenateRE = /([^-])([A-Z])/g;
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase();
}

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'babel-plugin-vue-auto-import',
      {
        excludeTags: ['List', 'HelloWorld'],
        lib(tag) {
          // 如果某个标签需要自动导入，请返回导入路径, 不需要则返回null
          if (tag.startsWith('el-')) {
            return `element-ui/lib/${tag.replace('el-', '')}`;
          }
          if (tag.startsWith('a-')) {
            return `ant-design-vue/lib/${tag.replace('a-', '')}`;
          }
          if(isCapitalStart(tag) || tag.startsWith('i-')) {
            const tagName = tag.startsWith('i-') ? tag.replace('i-', '') : toLine(tag)
            return `view-design/src/components/${toLine(tagName)}/index.js`
          }
          return null
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
