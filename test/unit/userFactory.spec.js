describe('userFactory', function(){
  beforeEach(module('gitHubUserList'));

  var user, username, avatar, followers;

  beforeEach(inject(function(UserFactory){
    username = 'Bob';
    avatar = 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png';
    followers = 10;
    user = new UserFactory(username, avatar, followers);
  }));

  it('is expected to have a username', function(){
      expect(user.username).toEqual(username);
  });

  it('is expected to have an avatar', function(){
    expect(user.avatar).toEqual(avatar);
  });

  it('is expected to have followers', function(){
    expect(user.followers).toEqual(followers);
  });

});
