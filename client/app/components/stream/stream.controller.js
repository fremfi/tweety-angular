function StreamController($http, TweetFactory) {

  const vm = this;
  vm.name = 'stream';
  vm.isLoading = true;

  vm.tweets = [];

  vm.$onInit = function () {
    TweetFactory.getTweets(vm.userName, vm.tweetCount).then(function(tweets) {
      vm.isLoading = false;
      vm.tweets = tweets;
    })
  };

}

export default StreamController;
