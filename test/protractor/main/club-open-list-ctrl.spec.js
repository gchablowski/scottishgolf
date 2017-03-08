'use strict';

describe('club open List page', function () {

    beforeEach(function () {
        browser.get('/#/main/club-open/list');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('Club Open');
    });

    it('Should get a list of elements', function () {
        var elements = element.all(protractor.By.css('.item'));
        expect(elements.count()).toEqual(27);
        expect(elements.get(0).getText()).toEqual('2017-05-18');
    });

    it('Should get a list of elements with divider at 90px', function () {
        var elm = element.all(protractor.By.css('.dirwrapper')).get(0).getSize().then(function (size) {
            expect(size.height).toEqual(91);
        });
    });

    it('Should get a list of elements without divider at 50px', function () {
        var elm = element.all(protractor.By.css('.dirwrapper')).get(1).getSize().then(function (size) {
            expect(size.height).toEqual(51);
        });
    });

    it('should allow me to filter by a text', function () {

        var elements = element.all(protractor.By.id('search'));
        elements.sendKeys('Course2');
        expect(elements.getAttribute('value')).toEqual(['Course2']);

        var elements = element.all(protractor.By.css('.item'));
        expect(elements.get(1).getText()).toContain('Elmwood Golf Course2');
    });

    it('should allow me to open a modal to add options', function () {

        var button = element.all(protractor.By.css('.ion-settings'));
        button.click();

        var elements = element.all(protractor.By.id('searchtitle'));
        expect(elements.get(0).getText()).toEqual("Search Options");
    });

    it('should allow me to filter by Regions options', function () {

        var button = element.all(protractor.By.css('.ion-settings'));
        button.click();

        var options = element.all(protractor.By.css('#regions option'));
        options.get(1).click();

        var close = element.all(protractor.By.id('close'));
        close.click();

        var elements = element.all(protractor.By.css('.item'));
        expect(elements.get(0).getText()).toEqual('2017-05-18');

        var item = elements.get(1).element(protractor.By.tagName("h2"));
        expect(item.getText()).toContain('Elmwood Golf Course2');
    });

    it('should allow me to filter by Category options', function () {

        var button = element.all(protractor.By.css('.ion-settings'));
        button.click();

        var options = element.all(protractor.By.css('#categories option'));
        options.get(1).click();

        var close = element.all(protractor.By.id('close'));
        close.click();

        var elements = element.all(protractor.By.css('.item'));
        expect(elements.get(0).getText()).toEqual('2017-05-18');

        var item = elements.get(1).element(protractor.By.tagName("h2"));
        expect(item.getText()).toContain('Elmwood Golf Course');
    });

    
     it('should allow me to go to the details page when I click on an element', function () {
     var elements = element.all(protractor.By.css('.item')).get(1);
     
     elements.click();
     
     expect(browser.getCurrentUrl()).toEqual("http://localhost:3000/#/main/club-open/list/detail/1");
     });

});