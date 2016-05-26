import TwitterCardModule from './twitterCard'
import TwitterCardController from './twitterCard.controller';
import TwitterCardComponent from './twitterCard.component';
import TwitterCardTemplate from './twitterCard.html';

describe('TwitterCard', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TwitterCardModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TwitterCardController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TwitterCardComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TwitterCardTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

  });
});
