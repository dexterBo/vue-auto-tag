const nodeHtmlParser = require('node-html-parser');

module.exports = class Parser {
  parse(code) {
    this.root = nodeHtmlParser.parse(code, {
      script: true,
    });
  }

  getTemplateTags() {
    this.tags = [...new Set(this.ast2Tag([this.root]))]
    return this.tags;
  }

  ast2Tag(nodes) {
    return nodes.reduce((_list, node) => {
      let list = _list;
      node.rawTagName && list.push(node.rawTagName);
      if (node.childNodes) {
        list = list.concat(this.ast2Tag(node.childNodes));
      }
      return list;
    }, []);
  }
};
