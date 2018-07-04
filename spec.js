describe('get list of elements', function(){

    //global vars:
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var result = element(by.className('ng-binding'));
  var history = element.all(by.repeater('result in memory'));

  beforeEach(function(){
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  function add(a,b){
    firstNumber.sendKeys(a);
    secondNumber.sendKeys(b);
    goButton.click();
  }

  it('check the history', function(){
    add(1,2);
    add(2,3);
    add(3,4);

    expect(history.count()).toEqual(3);

    add(5,6);
    add(6,7);

    expect(history.count()).toEqual(5);

  });





});