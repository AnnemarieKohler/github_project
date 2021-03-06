describe('userFactory', function(){
  beforeEach(module('gitHubUserList'));

  var user, username, avatar, followers, repos;

  beforeEach(inject(function(UserFactory){
    username = 'Bob';
    avatar = 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png';
    followers = 10;
    repos = 15;
    user = new UserFactory(username, avatar, followers, repos);
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

  it('is expected to have repos', function(){
    expect(user.repos).toEqual(repos);
  });

});
