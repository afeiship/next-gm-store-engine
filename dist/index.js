/*!
 * name: @jswork/next-gm-store-engine
 * description: Store engin for tampermonkey GM_storage.
 * homepage: https://github.com/afeiship/next-gm-store-engine
 * version: 1.0.0
 * date: 2020-11-20 16:45:06
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  var NxGmStoreEngine = nx.declare('nx.GmStoreEngine', {
    statics: {
      setItem: function (inKey, inValue) {
        return GM_setValue(inKey, inValue);
      },
      getItem: function (inKey) {
        return GM_getValue(inKey);
      },
      removeItem: function (inKey) {
        GM_deleteValue(inKey);
      },
      clear: function () {
        var keys = GM_listValues();
        keys.forEach(function (key) {
          this.removeItem(key);
        }, this);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxGmStoreEngine;
  }
})();
