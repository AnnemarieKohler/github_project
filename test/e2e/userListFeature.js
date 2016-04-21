describe("User list", function() {



  it("displays a user", function() {
    browser.get('/');
    var guy = $$('#user-list li').first().getText();
    expect(guy).toMatch("Guy1")
  })


});



write the test
write the logic in the controller
