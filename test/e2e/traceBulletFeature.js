describe('traceBulletFeature', function() {
  it('shows Hello World', function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('Hello World');
  });
});
