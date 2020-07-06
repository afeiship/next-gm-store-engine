(function() {
  var nx = require('@feizheng/next-js-core2');
  var NxGmStoreEngine = require('../src/next-gm-store-engine');

  describe('NxGmStoreEngine.methods', function() {
    test('init', function() {
      var data = {
        key: 1,
        value: 2
      };
      expect(!!data).toBe(true);
    });
  });
})();
