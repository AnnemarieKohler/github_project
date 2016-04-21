gitHubUserList.factory('UserFactory', function() {
    var user = function(username, avatar){
      this.username = username;
      this.avatar   = avatar;
    };
    return user;
});
