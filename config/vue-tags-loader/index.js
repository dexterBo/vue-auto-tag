const _ = require('lodash');
const { getOptions } = require('loader-utils');
const anymatch = require('anymatch');
const Parser = require('./parser');
const store = require('./store');
const pathUtils = require('./pathUtils');

const parser = new Parser();

function run(source, context) {
  const { resourcePath, resourceQuery } = context;
  if (!resourceQuery.includes('type=template')) {
    return source;
  }

  const { exclude } = getOptions(context) || {}; 
  if (exclude && anymatch(exclude, pathUtils.posixPath(resourcePath))) {
    return source;
  }

  parser.parse(source);
  const tags = parser.getTemplateTags();

  if (_.isEmpty(tags)) {
    return source;
  }

  store.set(resourcePath, tags);

  return source;
}

module.exports = function loader(source, ...args) {
  try {
    const code = run(source, this);
    this.callback(undefined, code, ...args);
  } catch (error) {
    this.callback(error, undefined, ...args);
  }
};
