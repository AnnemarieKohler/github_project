describe('UserListService', function(){

  var httpBackend, UserListService;
  beforeEach(module('gitHubUserList'));
  beforeEach(inject(function($httpBackend, _UserListService_){
    httpBackend = $httpBackend;
    UserListService = _UserListService_;
  }));



  it('logger', function() {
    httpBackend.whenGET('http://api.github.com/search/users').respond(SAMPLESEARCH);
    UserListService.getUserListByName('lorenzo')
      .then(function(dump) {
        console.log("hello");
        console.log(dump);
      });
    httpBackend.flush();
  });

});

// it('returns a promise with an array of usernames', function() {
//   httpBackend.expectGET('http://api.github.com/users').respond(usersList);
//   UserListService.getAll()
//     .then(function(response) {
//       expect(response).toEqual(usersList);
//     });
//   httpBackend.flush();
// });
