'use strict';
describe('iplayer App', function() {

  describe('Programmes menu', function() {

    beforeEach(function() {
      browser.get('app/');
    });

    it('have a list alphabetically of buttons', function() {
      var ButtonLabels = element.all(by.repeater('label in main.pageLabels'));
      expect(ButtonLabels.count()).toBe(27);
      expect(ButtonLabels.get(0).getText()).toBe("A");
    });

    it('doesnt have a list of items longer than 20', function() {
      var Items = element.all(by.repeater('item in main.items'));
      expect(Items.count()).toBeLessThan(21);
    });

    it('A-Z labels are visible', function() {
      element(by.id('C')).isDisplayed()
    });

    it('can move to a different page', function() {
      element(by.id('B')).click();
    });

    it('programme item has an image', function() {
      expect(element(by.css('.programme-img')).isPresent()).toBe(true);
    });

  });
});
