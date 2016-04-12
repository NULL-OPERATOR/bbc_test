'use strict';
(function() {
  function ProgrammeDataService ($http) {
    var ProgrammeDataService = {};
    var self = ProgrammeDataService;
    self.getData = function(letter, page) {
      var letter = letter.toLowerCase();
      var url = "https://ibl.api.bbci.co.uk/ibl/v1/atoz/" + letter + "/programmes?page=" + page
      return $http.get(url);
    }
    return ProgrammeDataService;
  }
angular
  .module('iplayerApp')
  .factory('ProgrammeDataService',['$http', ProgrammeDataService]);
})();
