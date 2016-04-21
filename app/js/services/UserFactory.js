gitHubUserList.factory('UserFactory', function() {
    var user = function(username, avatar, followers, repos){
      this.login = username;
      this.avatar   = avatar;
      this.followers = followers;
      this.repos = repos;
    };
    return user;
});
