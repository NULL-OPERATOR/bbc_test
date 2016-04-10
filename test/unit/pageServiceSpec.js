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
});
