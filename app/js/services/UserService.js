gitHubUserList.service('UserService', ['$http', 'UserFactory', function($http, UserFactory){

  this.getAll = function(){
    var users = [];

    $http.get('http://api.github.com/users')
      .then(function(response){
          response.data.forEach(function(data){
            var user = data.login;
            $http.get('http://api.github.com/users/' + user)
              .then(function(response){
                response.data(function(userData){
                  users.push(new UserFactory(userData.login,
                                              userData.avatar_url, userData.followers, userData.public_repos)
                  );
                });
              });
      });
      return users;
    });
  };


  // function getDetails(user){
  //   return $http.get('http://api.github.com/users/' + user)
  //     .then(function(response){
  //       return response.data(function(userData){
  //         users.push(new UserFactory(userData.login, userData.avatar_url, userData.followers, userData.public_repos));
  //       });
  //     });
  // }
}]);
