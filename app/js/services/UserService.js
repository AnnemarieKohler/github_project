gitHubUserList.service('UserService', ['$http', 'UserFactory', function($http, UserFactory){

  this.getAll = function(){
    var users = [];

    return $http.get('http://api.github.com/users')
      .then(function(response){
          response.data.forEach(function(data){
            // console.log(data);
            var user = data.login;
            // console.log(user);
            // getDetails(user);
             return $http.get('http://api.github.com/users/' + user)
                .then(function(response){
                  response.data(function(userData){
                    console.log(userData);

                    users.push(new UserFactory(userData.login, userData.avatar_url, userData.followers, userData.public_repos));
                  });
              });
              // console.log(users);

        return users;
      });
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
