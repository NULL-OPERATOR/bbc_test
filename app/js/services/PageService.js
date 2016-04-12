'use strict';
(function() {
  function PageService () {
    var PageService = {};
    var self = PageService;

    self.pageCount = function(count) {
      var total = Math.ceil(count / 20)
      return Array.from(Array(total), (x, i) => i + 1)
    }

    self.createLabels = function() {
      var labels = []
      for (var i = 65; i < 91; i++) {
        labels.push(String.fromCharCode(i));
      }
      labels.push('0-9')
      return labels
    }

    self.imgUrl = function(url, size) {
      return url.replace('{recipe}', size)
    }

  return PageService;
  };
angular
  .module('iplayerApp')
  .factory('PageService', PageService);
})();
