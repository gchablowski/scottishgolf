'use strict';

describe('club open List page', function () {
    var firstname, lastname, email, number, error;

    beforeEach(function () {
        browser.get('/#/main/club-open/list/detail/signup/1');

        firstname = element.all(protractor.By.css('#firstname'));
        lastname = element.all(protractor.By.css('#lastname'));
        email = element.all(protractor.By.css('#email'));
        number = element.all(protractor.By.css('#number'));
        error = element.all(protractor.By.css('#error'));
    });

    it('Should have a title', function () {
        expect(browser.getTitle()).toEqual('Elmwood Golf Course');
    });

    it('should allow me to fill a form', function () {

        var submitButton = element.all(protractor.By.css('#signup'));

        firstname.sendKeys('firstname');
        lastname.sendKeys('lastname');
        email.sendKeys('email@email.com');

        browser.executeScript("document.getElementById('number').value = '2';");

        submitButton.click();

        expect(firstname.getAttribute('value')).toEqual(['firstname']);
        expect(lastname.getAttribute('value')).toEqual(['lastname']);
        expect(email.getAttribute('value')).toEqual(['email@email.com']);
        expect(number.getAttribute('value')).toEqual(['2']);

    });

    it('should show error if the form is not filled', function () {

        firstname.click();
        lastname.click();

        expect(error.isDisplayed()).toBeTruthy();

    });



});