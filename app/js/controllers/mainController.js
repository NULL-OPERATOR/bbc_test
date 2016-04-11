'use strict';
(function () {
  function MainCtrl ($http, PageService) {
    var self = this;
    self.currentLetter = "a"
    self.pageLabels = PageService.createLabels();

    self.getPage = function(letter, page) {
      self.currentLetter = letter.toLowerCase();
      var url = "https://ibl.api.bbci.co.uk/ibl/v1/atoz/" + self.currentLetter + "/programmes?page=" + page

      $http.get(url).success(function(data) {
        self.items = data.atoz_programmes.elements;
        self.pages = PageService.pageCount(data.atoz_programmes.count);
      })
    }

    self.getPage('a', 1)
}
  angular
    .module('iplayerApp')
    .controller('MainCtrl',['$http', 'PageService', MainCtrl]);
})();
