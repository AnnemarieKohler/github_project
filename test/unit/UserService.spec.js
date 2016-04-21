describe('UserService', function(){
  beforeEach(module('gitHubUserList'));

  var httpBackend, UserFactory, UserService;
  var userData = [{ username: "bob123", avatar: 'awesomer pic', followers: 10, repos: 15 }];

  beforeEach(inject(function($httpBackend, _UserFactory_, _UserService_){
    httpBackend = $httpBackend;
    UserFactory = _UserFactory_;
    UserService = _UserService_;
  }));

  it('fetches API data and builds user data', function(){
    httpBackend.expectGET('http://api.github.com/users').respond(userData);
    var username = userData.username;
    httpBackend.expectGET('http://api.github.com/users/' + username);
    var user1 = new UserFactory('bob123', 'awesomer pic', 10, 15);
    UserService.getAll().then(function(userData){
      expect(userData).toEqual([user1]);
      httpBackend.flush();
    });
  });
});
