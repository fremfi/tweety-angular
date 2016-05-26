//import moment from 'moment';

function StreamController($http) {

  var vm = this;
  vm.name = 'stream';
  vm.isLoading = true;

  vm.tweets = [];
  var apiUrl = 'https://gm-twitter-proxy.herokuapp.com/1.1/statuses/user_timeline.json?count=' + vm.tweetCount + '&screen_name=' + vm.userName;

    //TODO:// Figure out how to translate dates to twitter since_id and max_id
    //+ '&since:' + moment(new Date(vm.startDate)).format("YYYY-MM-DD") +
    //'&until:' + moment(new Date(vm.endDate)).format("YYYY-MM-DD");

  function fetchTweets($http) {
    return $http.get(apiUrl)
      .then(function(response) {
        return response.data;
      });
  }

  vm.$onInit = function () {
    fetchTweets($http).then(function (tweets){
      vm.isLoading = false;
      vm.tweets = tweets;
    });
  }

}

export default StreamController;
