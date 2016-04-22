describe('UserListService', function(){
  beforeEach(module('gitHubUserList'));

  var httpBackend, UserFactory, UserListService;
  var usersList = [
    { login: "bob123", id: 1, avatar_url: "dummy_url" },
    { login: "mark456", id: 2, avatar_url: "dummy_url" }
    ];
  var userData = { login: "bob123", public_repos: 60};
  var userData2 = { login: "bob123", public_repos: 60};


  beforeEach(inject(function($httpBackend, _UserListService_){
    httpBackend = $httpBackend;
    UserListService = _UserListService_;
  }));

  it('returns a promise with an array of usernames', function() {
    httpBackend.expectGET('http://api.github.com/users').respond(usersList);
    UserListService.getAll()
      .then(function(response) {
        expect(response).toEqual(['bob123', 'mark456']);
      });
    httpBackend.flush();
  });

});
