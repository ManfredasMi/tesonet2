var CareerPage = function() {
	this.careerButton = By.css('[href="https://tesonet.com/career/"]');
	this.url = "https://www.tesonet.com";
	this.categories = By.css('[role="document"] .content main > h5');

	this.openTesonetWebpage = () => {
		browser.get(this.url);
	}
    
    this.clickCareerButton = () => {
        element(this.careerButton).click();
    };

    this.logCategories = () => {
		element.all(this.categories).each(function(element, index) {
          	var number = index + 1;
          	element.getText().then(function(text) {
              	console.log("This is the: " + number + " category "+ "and the name of it is: " + text);
          	});
        });
    };
}
module.exports = CareerPage;