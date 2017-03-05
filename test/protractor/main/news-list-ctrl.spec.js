'use strict';

describe('List page', function () {

    beforeEach(function () {
        browser.get('/#/main/news/list');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('News');
    });

    it('Should get a carousel', function () {
        var elements = element.all(protractor.By.css('.carousel'));
        expect(elements.count()).toEqual(6);
    });

    it('Should get a grid', function () {
        var elements = element.all(protractor.By.css('.grid'));
        expect(elements.count()).toEqual(8);
    });
    

    /*
     it('should allow me to go to the details page when I click on a  elment', function () {
     var elements = element.all(protractor.By.css('.golfs')).first();
     
     elements.click();
     
     expect(browser.getCurrentUrl()).toEqual("http://localhost:3000/#/main/club-finders/list/detail/1");
     });
     */

});