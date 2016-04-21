describe("User list", function() {
  it("displays a user", function() {
    browser.get('/');
    var guy = $$('#user-list li').getText();
    expect(guy).toMatch("Guy1")
  })
});
