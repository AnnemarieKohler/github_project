gitHubUserList.service('UserListService', ['$http', function($http){

  this.getAll = function(){

    var getUserIds = function (userList) {
      var idList = [];
      for(var i = 0; i < userList.data.length; i++) {
        idList.push(userList.data[i].login);
      }
      return idList;
    };

    return $http.get('http://api.github.com/users')
      .then(getUserIds);

  };

}]);
