'use strict';
(function () {
  function MainCtrl ($http, PageService, ProgrammeDataService) {
    var self = this;
    self.currentLetter = "a"
    self.pageLabels = PageService.createLabels();
    self.pages = []

    self.getPage = function(letter, page) {
      self.currentLetter = letter
      ProgrammeDataService.getData(letter, page).then(function(response) {
        // console.log(response)
        self.items = response.data.atoz_programmes.elements;
        self.pages = PageService.pageCount(response.data.atoz_programmes.count);
      })
    }

    self.getUrl = function(url, size) {
      return PageService.imgUrl(url, size);
    }

    self.showPages = function() {
      return self.pages.length > 1
    }

    self.getPage('a', 1)
}
  angular
    .module('iplayerApp')
    .controller('MainCtrl',['$http', 'PageService', 'ProgrammeDataService', MainCtrl]);
})();
