describe("User list", function() {

  it("displays users", function() {
    browser.get('/');
    var guys = $$('#user-list li');
    expect(guys.count()).toBe(4);
  });

  it("filter users by the text entered", function() {
    browser.get('/');
    var searchBox = $('#name-search');
    searchBox.sendKeys('lorenzo');
    var guys = $$('#user-list li');
    expect(guys.count()).toBe(1);
  });

});
