gitHubUserList.controller('gitHubUserController', ['UserListService', function(UserListService) {
  var self = this;
  self.users = [];

  self.updateUserList = function(name) {
    UserListService.getUserListByName(name)
      .then(function(list) {
        self.users = list;
      });
  };

  self.updateUserList('lorenzo');

}]);
