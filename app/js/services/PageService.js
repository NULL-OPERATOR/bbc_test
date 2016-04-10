'use strict';
(function() {
  function PageService () {
    var PageService = {};
    var self = PageService;

    self.pageCount = function(count) {
      var total = Math.ceil(count / 20)
      return Array.from(Array(total), (x, i) => i + 1)
    }


  return PageService;
  };
angular
  .module('iplayerApp')
  .factory('PageService', PageService);
})();
