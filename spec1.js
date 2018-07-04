describe('Enter name feature', function()
{
    it('should enter name as Tom', function()
    {
        browser.get('https://angularjs.org/');
        element(by.model('yourName')).sendKeys('Tom');
        var text = element(by.xpath('/html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
        expect(text.getText()).toEqual('Hello Tom!');
    });   
});


describe('Protractor Demo App', function() {
    it('should have a title', function() {
      browser.get('http://juliemr.github.io/protractor-demo/');      
      expect(browser.getTitle()).toEqual('Super Calculator');
      browser.driver.sleep(3000);
      element(by.model('first')).sendKeys('Selenium');
      browser.driver.sleep(3000);
    });
  });

  describe('multiple elements', function(){

    it('should add one and two', function(){
      browser.get('http://juliemr.github.io/protractor-demo/');
      element(by.model('first')).sendKeys(1);
      element(by.model('second')).sendKeys(2);
  
      element(by.id('gobutton')).click();
      expect(element(by.className('ng-binding')).getText()).
      toEqual('3');
    });
  });