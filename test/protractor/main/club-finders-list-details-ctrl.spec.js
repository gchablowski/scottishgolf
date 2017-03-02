'use strict';

describe('List page', function () {

    beforeEach(function () {
        browser.get('/#/main/club-finders/list/detail/1');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('Golspie Golf Club');
    });

    it('Should show the infos tabs when the user arrived', function () {
        var infoButton = element.all(protractor.By.css('.ion-information-circled'));
        expect(infoButton.getAttribute('class')).toEqual(['button icon ion-information-circled active']);

        var infos = element.all(protractor.By.css('#info'));
        expect(infos.getAttribute('class')).toEqual(['padding']);

        var offer = element.all(protractor.By.css('#offer'));
        expect(offer.getAttribute('class')).toEqual(['padding ng-hide']);

        var competition = element.all(protractor.By.css('#competition'));
        expect(competition.getAttribute('class')).toEqual(['padding ng-hide']);
    });

    it('Should show the offer tabs when the user click on the offer button', function () {

        var offerButton = element.all(protractor.By.css('.ion-bag'));
        offerButton.click();
        expect(offerButton.getAttribute('class')).toEqual(['button icon ion-bag activated active']);

        var infoButton = element.all(protractor.By.css('.ion-information-circled'));
        expect(infoButton.getAttribute('class')).toEqual(['button icon ion-information-circled']);

        var competitionButton = element.all(protractor.By.css('.ion-ribbon-a'));
        expect(competitionButton.getAttribute('class')).toEqual(['button ion-ribbon-a']);

        var infos = element.all(protractor.By.css('#info'));
        expect(infos.getAttribute('class')).toEqual(['padding ng-hide']);

        var offer = element.all(protractor.By.css('#offer'));
        expect(offer.getAttribute('class')).toEqual(['padding']);

        var competition = element.all(protractor.By.css('#competition'));
        expect(competition.getAttribute('class')).toEqual(['padding ng-hide']);
    });

    it('Should show the competition tabs when the user click on the competition button', function () {

        var competitionButton = element.all(protractor.By.css('.ion-ribbon-a'));
        competitionButton.click();
        expect(competitionButton.getAttribute('class')).toEqual([ 'button ion-ribbon-a activated active' ]);

        var offerButton = element.all(protractor.By.css('.ion-bag'));
        expect(offerButton.getAttribute('class')).toEqual(['button icon ion-bag']);

        var infoButton = element.all(protractor.By.css('.ion-information-circled'));
        expect(infoButton.getAttribute('class')).toEqual(['button icon ion-information-circled']);

        var infos = element.all(protractor.By.css('#info'));
        expect(infos.getAttribute('class')).toEqual(['padding ng-hide']);

        var offer = element.all(protractor.By.css('#offer'));
        expect(offer.getAttribute('class')).toEqual(['padding ng-hide']);

        var competition = element.all(protractor.By.css('#competition'));
        expect(competition.getAttribute('class')).toEqual(['padding']);
    });

});