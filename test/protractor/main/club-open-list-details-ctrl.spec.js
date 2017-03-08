'use strict';

describe('List page', function () {

    beforeEach(function () {
        browser.get('/#/main/club-open/list/detail/1');
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('Elmwood Golf Course');
    });

    it('Should show the infos when the user arrived', function () {
        var infos = element.all(protractor.By.css('.item-divider'));
        expect(infos.getText()).toEqual([ 'Elmwood Golf Course' ]);
    });
});