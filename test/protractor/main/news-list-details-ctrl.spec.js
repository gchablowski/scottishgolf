'use strict';

describe('List page', function () {

    beforeEach(function () {
        browser.get('/#/main/news/list/detail/article/1');
    });

    it('Should have an image', function () {
        var elements = element.all(protractor.By.css('.golfimg'));
        expect(elements.count()).toEqual(1);
    });

    it('Should have a text', function () {
        var elements = element.all(protractor.By.css('#articleText'));
        expect(elements.count()).toEqual(1);
    });

});