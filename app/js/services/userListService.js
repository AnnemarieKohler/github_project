gitHubUserList.service('UserListService', ['$http', function($http){

  this.getAll = function(){

    var getUserIds = function (userList) {
      var idList = [];
      for(var i = 0; i < userList.data.length; i++) {
        idList.push({login: userList.data[i].login,avatar:userList.data[i].avatar_url});
      }
      return idList;
    };

    return $http.get('http://api.github.com/users')
      .then(getUserIds);

  };

  this.getUserListByName = function(name) {
    var SEARCHURL = 'http://api.github.com/search/users';
    var USERSURL = 'http://api.github.com/users';

    var getUserIds = function (blob) {
      idList = [];
      for(var i = 0; i < blob.data.items.length; i++) {
        idList.push({login: blob.data.items[i].login, avatar: blob.data.items[i].avatar_url});
      }
      return idList;
    };

    return $http.get(SEARCHURL + "?q=" + name)
      .then(getUserIds);

  };

}]);
