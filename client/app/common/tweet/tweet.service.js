let TweetService = function (TweetFactory) {

  this.getTweets = (username, tweetCount) => {
    return TweetFactory.getTweets(username, tweetCount).then(function(response) {
        return response.data;
      });
  };
};

export default TweetService;
