import TweetModule from './tweet';

describe('TweetService', () => {
  let $rootScope, deferred, $scope, TweetService, TweetFactory;

  beforeEach(function(){
    window.module(TweetModule.name);
    angular.mock.inject([
      '$q',
      '$rootScope',
      'TweetFactory',
      'TweetService',
      function (
          $q,
          $rootScope,
          _TweetFactory_,
          _TweetService_,
      ) {
          deferred = $q.defer();
          $scope = $rootScope.$new();
          TweetFactory = _TweetFactory_;
          TweetService = _TweetService_;
      }
    ]);
  });

  it('should be defined', () => {
    expect(TweetService).toBeDefined();
  });

  it('should be get tweets by count and username', () => {
    spyOn(TweetFactory, 'getTweets').and.returnValue(deferred.promise);
    var tweetsPromise = TweetService.getTweets('AppDirect', 30);
    expect(TweetFactory.getTweets).toHaveBeenCalled();
    deferred.resolve(['tweets']);
    $scope.$apply();
    tweetsPromise.then(function(tweets){
      expect(tweets).toEqual(['tweets']);
    });
  });

});
