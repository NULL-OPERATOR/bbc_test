'use strict';

describe('main controller', function() {

  describe('MainCtrl', function(){
    var ctrl, $httpBackend;

    beforeEach(module('iplayerApp'));
    beforeEach(inject(function(_$httpBackend_, $controller) {
      // $httpBackend = _$httpBackend_;
      // var url = ""
      // $httpBackend.expectGET(url)
        // .respond( {"items": [{"title": "upload"}]} )
      ctrl = $controller('MainCtrl');
    }));

    it('sets the items', function() {
      expect(ctrl.items).toBe([]);
      $httpBackend.flush();
      expect(ctrl.items.length).toBe(1);
    });

  });
});
