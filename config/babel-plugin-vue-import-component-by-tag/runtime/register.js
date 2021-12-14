
const _ = require('lodash');

function kebabCase(str) {
  var hyphenateRE = /([^-])([A-Z])/g;
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase();
}

export default function (options, components) {
  var componentNames = [];
  for (var componentsKey in components) {
    componentNames.push(kebabCase(componentsKey));
  }
  options.forEach(function (option) {
    for (const key in option.component || {}) {
      if (Object.hasOwnProperty.call(option.component, key)) {
        const childComponent = option.component[key];
        if(_.isObject(childComponent) && !_.isFunction(childComponent) && _.isString(childComponent.name)) {
          components[childComponent.name] = childComponent
        }
      }
    }
    var tag = kebabCase(option.tag);
    var has = false;
    for(var i = 0; i < componentNames.length; i++) {
      if (has) {
        continue;
      }
      var componentName = componentNames[i];
      has = componentName === tag;
    }
    if (!has) {
      components[tag] = option.component;
    }
  });
}