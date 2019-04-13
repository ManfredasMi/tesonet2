const CareerPage = require("../pages/task");

describe('Starting a test suite', function() {

    var careerPage;

    beforeAll(function() {
        careerPage = new CareerPage();
        // Turning of looking for angular webpage here
        browser.waitForAngularEnabled(false);
        careerPage.openTesonetWebpage();
    });

    it('Counting the number of categories and printing them down: ', function() {
        careerPage.clickCareerButton();
        careerPage.logCategories();
        // Every "it" should have to expect something, but not much to expect here
        // as I'm console logging the number and names of the categories
    });
});