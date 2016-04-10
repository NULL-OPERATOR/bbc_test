'use strict';

describe('main controller', function() {


  describe('MainCtrl', function(){
    var ctrl, httpBackend;

    beforeEach(module('iplayerApp'));
    beforeEach(inject(function(_$httpBackend_, $controller) {
      var testData = {"atoz_programmes": {"elements": ["one item"] } }
      var url = "https://ibl.api.bbci.co.uk/ibl/v1/atoz/a/programmes?page=1"
      httpBackend = _$httpBackend_;
      httpBackend.expectGET(url).respond(testData);
      ctrl = $controller('MainCtrl');
    }));

    it('items are undefined until called from api', function() {
      expect(ctrl.items).toBeUndefined();
    });

    it('default api call is made to populate list', function() {
      httpBackend.flush();
      expect(ctrl.items).toEqual(["one item"]);
    });

  });
});
