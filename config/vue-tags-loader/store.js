const Cache = require('sync-disk-cache');
const pathUtils = require('./pathUtils');

const NS = '__dexter-record-tags';

const cache = new Cache(NS, {
  location: pathUtils.resolve('node_modules/.cache/sync-disk-cache'),
});

module.exports = {
  set(path, tags) {
    cache.set(pathUtils.posixPath(path), JSON.stringify(tags));
  },
  get(path) {
    const cacheStore = cache.get(pathUtils.posixPath(path));
    if (!cacheStore || !cacheStore.value) {
      return null;
    }
    return JSON.parse(cacheStore.value);
  },
  clear() {
    cache.clear();
  },
};
