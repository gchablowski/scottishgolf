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

    it('should allow me to filter by a text', function () {

        var elements = element.all(protractor.By.id('search'));
        elements.sendKeys('2');
        expect(elements.getAttribute('value')).toEqual(['2']);

        var elements = element.all(protractor.By.css('.item'));
        expect(elements.get(0).getText()).toEqual('2017-05-18');
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
        expect(item.getText()).toEqual('Elmwood Golf Course2');
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
        expect(item.getText()).toEqual('Elmwood Golf Course');
    });
    
   /*
    it('should allow me to go to the details page when I click on a  elment', function () {
        var elements = element.all(protractor.By.css('.golfs')).first();
        
        elements.click();
        
        expect(browser.getCurrentUrl()).toEqual("http://localhost:3000/#/main/club-finders/list/detail/1");
    });*/
    
});