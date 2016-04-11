'use strict';

describe('PageService', function() {
  var pageService;
  beforeEach(module('iplayerApp'));
  it('check service exists', inject(function(PageService) {
      expect(PageService).toBeDefined();
  }));

  beforeEach(inject(function(PageService) {
    pageService = PageService;
  }));

  it('return the page count as an array of multiples of 20', function() {
    expect(pageService.pageCount(20)).toEqual( [1] )
  })

  it('rounds up the page number', function() {
    expect(pageService.pageCount(21)).toEqual( [1, 2] )
  })

  it('creates labels A to Z and 0-9 in an array', function() {
    var expected = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0-9"]
    expect(pageService.createLabels()).toEqual(expected)
  })

  it('creates a valid img url', function() {
    var invalidUrl = "http://{recipe}/p02c72z7.jpg"
    var validUrl = "http://192x108/p02c72z7.jpg"
    expect(pageService.imgUrl(invalidUrl, '192x108')).toEqual(validUrl);
  })
});
