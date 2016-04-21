gitHubUserList.controller('gitHubUserController', ['UserFactory', function(UserFactory) {
  var self = this;
  this.users=[{username: "claudia", avatar: "testurl", followers: "1000", repos: "1"},
              {username: "andrew", avatar: "testurl", followers: "1", repos: "5"},
              {username: "lorenzo", avatar: "testurl", followers: "100", repos: "512"},
              {username: "person", avatar: "testurl", followers: "121", repos: "95"}];

}]);
