describe('multiple scenarios', function(){
  //global vars:
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var result = element(by.className('ng-binding'));

  //beforeEach --> will be executed before every it block
  beforeEach(function(){
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  //tc1
  it('should have a title', function(){
    expect(browser.getTitle()).toEqual('Super Calculator');
  });

  //tc2
  it('should add one and two', function(){
    firstNumber.sendKeys(1);
    secondNumber.sendKeys(2);
    goButton.click();

    expect(result.getText()).toEqual('3');
  });

  //tc3
  it('should add four and six', function(){
    firstNumber.sendKeys(4);
    secondNumber.sendKeys(6);
    goButton.click();

    expect(result.getText()).toEqual('10');
  });

  //tc4
  it('should read the value from an input',function(){
    firstNumber.sendKeys(5);
    expect(firstNumber.getAttribute('value')).toEqual('5');

  });


});






