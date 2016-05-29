import FeedModule from './feed'
import FeedController from './feed.controller';
import FeedComponent from './feed.component';
import FeedTemplate from './feed.html';

describe('Feed', () => {
  let $rootScope, makeController;

  beforeEach(window.module(FeedModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new FeedController();
    };
  }));

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller.name).toBeTruthy();
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = FeedComponent;

      it('includes the intended template',() => {
        expect(component.template).toEqual(FeedTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component.controllerAs).toBeTruthy();
      });

      it('invokes the right controller', () => {
        expect(component.controller).toEqual(FeedController);
      });
  });
});
