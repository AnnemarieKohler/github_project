describe('userFactory', function(){
  beforeEach(module('gitHubUserList'));

  var user;

  beforeEach(inject(function(UserFactory){
    var username = 'Bob';
    user = new UserFactory(username);
  }));

  it('is expected to have a username', function(){
    expect(user.username).toEqual('Bob');
  });
});
