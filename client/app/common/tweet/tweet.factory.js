let TweetFactory = function ($http) {

  let getTweets = (username, tweetCount) => {
    return $http.get(`https://gm-twitter-proxy.herokuapp.com/1.1/statuses/user_timeline.json?count=${tweetCount}&screen_name=${username}`);
  };
  return { getTweets };
};

export default TweetFactory;
