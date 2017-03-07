'use strict';

describe('club finder List page', function () {

    beforeEach(function () {
        browser.get('/#/main/club-finders/list');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('Club finders');
    });

    it('Should get a list of elements', function () {
        var elements = element.all(protractor.By.css('.golfs'));
        expect(elements.count()).toEqual(20);
        expect(elements.get(0).getText()).toEqual('Golspie Golf Club');
    });

    it('should allow me to filter by a text', function () {

        var elements = element.all(protractor.By.id('search'));
        elements.sendKeys('tain');
        expect(elements.getAttribute('value')).toEqual(['tain']);

        var elements = element.all(protractor.By.css('.golfs'));
        expect(elements.get(0).getText()).toEqual('Tain Golf Club');
    });

    it('should allow me to open a modal to add options', function () {

        var button = element.all(protractor.By.css('.ion-settings'));
        button.click();

        var elements = element.all(protractor.By.id('searchtitle'));
        expect(elements.get(0).getText()).toEqual("Search Options");
    });

    it('should allow me to filter by options', function () {

        var button = element.all(protractor.By.css('.ion-settings'));
        button.click();

        var options = element.all(protractor.By.tagName('option'));
        options.get(1).click();

        var close = element.all(protractor.By.id('close'));
        close.click();

        var elements = element.all(protractor.By.css('.golfs'));
        expect(elements.get(0).getText()).toEqual('Golspie Golf Club');
        expect(elements.get(1).getText()).toEqual('');
    });
    
    it('should allow me to filter by toggle button', function () {

        var button = element.all(protractor.By.css('.ion-settings'));
        button.click();

        var toggle = element.all(protractor.By.css('#membership .toggle'));
        toggle.click();

        var close = element.all(protractor.By.id('close'));
        close.click();

        var elements = element.all(protractor.By.css('.golfs'));
        expect(elements.get(0).getText()).toEqual('Golspie Golf Club');
        expect(elements.get(1).getText()).toEqual('Tain Golf Club2');
        expect(elements.get(2).getText()).toEqual('');
    });
    
    it('should allow me to go to the details page when I click on a  elment', function () {
        var elements = element.all(protractor.By.css('.golfs')).first();
        
        elements.click();
        
        expect(browser.getCurrentUrl()).toEqual("http://localhost:3000/#/main/club-finders/list/detail/1");
    });
    
    
});