import TweetModule from './tweet';

describe('TweetFactory', () => {
  let $httpBackend, TweetFactory;

  beforeEach(function(){
    window.module(TweetModule.name);
    angular.mock.inject([
      '$httpBackend',
      'TweetFactory',
      function (
          _$httpBackend_,
          _TweetFactory_,
      ) {
          $httpBackend = _$httpBackend_;
          TweetFactory = _TweetFactory_;
          $httpBackend.when('GET', 'https://gm-twitter-proxy.herokuapp.com/1.1/statuses/user_timeline.json?count=30&screen_name=AppDirect').respond(200, ['tweets']);
      }
    ]);
  });

  it('should be defined', () => {
    expect(TweetFactory).toBeDefined();
  });

  it('should get tweets given username and count', () => {
    TweetFactory.getTweets('AppDirect', 30).then(function(tweets){
      expect(tweets.data).toEqual(['tweets']);
    });
    $httpBackend.flush();
  });

});
