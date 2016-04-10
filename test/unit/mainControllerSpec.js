'use strict';

describe('main controller', function() {


  describe('MainCtrl', function(){
    var main, httpBackend;

    beforeEach(module('iplayerApp'));
    beforeEach(inject(function(_$httpBackend_, $controller) {
      var testData = {"atoz_programmes": {"elements": ["one item"], "count": 1 } }
      var url = "https://ibl.api.bbci.co.uk/ibl/v1/atoz/a/programmes?page=1"
      httpBackend = _$httpBackend_;
      httpBackend.expectGET(url).respond(testData);
      main = $controller('MainCtrl');
    }));

    it('items are undefined until called from api', function() {
      expect(main.items).toBeUndefined();
    });

    it('default api call is made to populate list', function() {
      httpBackend.flush();
      expect(main.items).toEqual(["one item"]);
    });

    it('sets the page count array after a call', function() {
      httpBackend.flush();
      expect(main.pages).toEqual([1])
    })

  });
});
