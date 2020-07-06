(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

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
