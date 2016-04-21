gitHubUserList.factory('UserFactory', function() {
    var user = function(username, avatar, followers){
      this.username = username;
      this.avatar   = avatar;
      this.followers = followers;
    };
    return user;
});
