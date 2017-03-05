'use strict';

describe('List page', function () {

    beforeEach(function () {
        browser.get('/#/main/leaderboards/list');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('National leaderboards');
    });

    it('Should get a list of elements', function () {
        var elements = element.all(protractor.By.css('.item'));
        expect(elements.count()).toEqual(23);
        var item = elements.get(0).element(protractor.By.tagName("p"));
        expect(item.getText()).toEqual('rank: 1');
    });

    it('should allow me to filter by a text', function () {

        var search = element.all(protractor.By.id('search'));
        search.sendKeys('6');
        expect(search.getAttribute('value')).toEqual(['6']);

        var item = element.all(protractor.By.css('.item')).get(0).element(protractor.By.tagName("p"));
        expect(item.getText()).toEqual('rank: 6');
    });
    
});