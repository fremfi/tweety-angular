let TweetFactory = function ($http) {

  let getTweets = (username, tweetCount) => {
    return $http.get(`https://gm-twitter-proxy.herokuapp.com/1.1/statuses/user_timeline.json?count=${tweetCount}&screen_name=${username}`)
      .then(function(response) {
        return response.data;
      });
  };
  return { getTweets };
};

export default TweetFactory;
