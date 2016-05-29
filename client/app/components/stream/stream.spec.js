import StreamModule from './stream';
import StreamController from './stream.controller';
import StreamComponent from './stream.component';
import StreamTemplate from './stream.html';

describe('Stream', () => {
  let $rootScope, deferred, $scope, TweetService, makeController;

  beforeEach(function(){
    window.module(StreamModule.name);
    angular.mock.inject([
      '$q',
      '$rootScope',
      'TweetService',
      function (
          $q,
          $rootScope,
          _TweetService_,
      ) {
          deferred = $q.defer();
          $scope = $rootScope.$new();
          TweetService = _TweetService_;
          makeController = () => {
            return new StreamController(TweetService);
          };
      }
    ]);
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller.name).toBeTruthy();
    });

    it('should get tweets by username and count', () => {
      let controller = makeController();
      spyOn(TweetService, 'getTweets').and.callFake(function () {
        return deferred.promise;
      });
      controller.$onInit();
      $scope.$apply(function () {
        deferred.resolve(['tweets']);
      });
      expect(controller.tweets).toEqual(['tweets']);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = StreamComponent;

      it('includes the intended template',() => {
        expect(component.template).toEqual(StreamTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component.controllerAs).toBeTruthy();
      });

  });
});
