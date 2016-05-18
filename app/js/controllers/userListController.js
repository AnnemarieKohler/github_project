gitHubUserList.controller('gitHubUserController', ['UserListService', function(UserListService) {
  var self = this;

  self.users = [];

  UserListService.getAll()
    .then(function(list) {
      self.users = list;
    });
}]);
