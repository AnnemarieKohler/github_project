gitHubUserList.service('UserService', ['$http', 'UserFactory', function($http, UserFactory){

  this.getAll = function(){
    return $http.get('http://api.github.com/users')
    .then(function(response){
        var user = response.data.login;
        getDetails(user);
    });
  };

  function getDetails(user){
    return $http.get('http://api.github.com/users/' + user)
      .then(function(response){
        return response.data(function(userData){
          return new UserFactory(userData.login, userData.avatar_url, userData.followers, userData.public_repos);
        });
      });
  }

}]);
