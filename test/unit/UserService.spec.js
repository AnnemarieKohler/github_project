describe('UserService', function(){
  beforeEach(module('gitHubUserList'));

  var httpBackend, UserFactory, UserService;
  var userData = [
    { login: "bob123", avatar: 'awesomer pic', followers: 10, repos: 15 }
    ];

  beforeEach(inject(function($httpBackend, _UserFactory_, _UserService_){
    httpBackend = $httpBackend;
    UserFactory = _UserFactory_;
    UserService = _UserService_;
  }));

  it('fetches API data and builds user data', function(){
    httpBackend.expectGET('http://api.github.com/users').respond(userData);
    var username = userData[0].login;

    console.log(username);

    httpBackend.expectGET('http://api.github.com/users/' + username).respond(userData);
    var user1 = new UserFactory(userData.login, userData.avatar, userData.followers, userData.repos);
    // UserService.getAll()(function(userData){
    console.log('blaaaa');
    console.log(new UserFactory(userData.login, userData.avatar, userData.followers, userData.repos));
    console.log(user1.login);
      expect(userData[0].data).toBe(user1);
    // });
    httpBackend.flush();

  });
});
