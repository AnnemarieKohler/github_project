gitHubUserList.controller('gitHubUserController', ['UserFactory', function(UserFactory) {
  var self = this;
  this.users=[{username: "claudia", avatar: "testurl", followers: "1000", repos: "1"},
              {username: "andrew", avatar: "testurl", followers: "1", repos: "5"}]

  self.searchUsers = function(searchTerm) {
  };


}]);
