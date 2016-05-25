function StreamController($http) {

  var vm = this;
  vm.name = 'stream';

  vm.tweets = [];
  var apiUrl = 'http://localhost:7890/1.1/statuses/user_timeline.json?count=' + vm.tweetCount + '&screen_name=' + vm.userName;

  function fetchTweets($http) {
    return $http.get(apiUrl)
      .then(function(response) {
        return response.data;
      });
  }

  vm.$onInit = function () {
    fetchTweets($http).then(function (tweets){
      vm.tweets = tweets;
    })
  }

}

export default StreamController;
