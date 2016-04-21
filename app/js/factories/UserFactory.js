gitHubUserList.factory('UserFactory', function() {
    var user = function(username){
      this.username = username;
    };
    return user;
});
