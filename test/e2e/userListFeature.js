describe("User list", function() {



  it("displays a user", function() {
    browser.get('/');
    var guy = $$('#user-list li').first().getText();
    expect(guy).toMatch("Guy1")
  })

  // it("displays a user", function() {
  //   browser.get('/');
  //   var guy = $$('#user-list img').first();
  //   expect(guy).toMatch(testurl)
  // })

});



write the test
write the logic in the controller
