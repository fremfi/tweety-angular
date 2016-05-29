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

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller.name).toBeTruthy();
    });

    it('should create hyperlink on urls and usernames', () => {
      let controller = makeController();
      controller.content = '@fjmva https://www.fjmva.com';
      let expectedHyperLinkedContent = '<a href="http://www.twitter.com/@fjmva" target="_blank">@fjmva</a> <a href="https://www.fjmva.com" target="_blank">https://www.fjmva.com</a>';
      let hyperLinkedContent = controller.getTweetContent();
      expect(hyperLinkedContent).toEqual(expectedHyperLinkedContent);
    });

    it('should generate relative tweet time', () => {
      let controller = makeController();
      controller.tweetTime = 'Sun Apr 24 01:53:44 +0000 2016';
      let expectedRelativeTweetTime = 'a month ago';
      let relativeTweetTime = controller.getRelativeTweetTime();
      expect(relativeTweetTime).toEqual(expectedRelativeTweetTime);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TwitterCardComponent;

      it('includes the intended template',() => {
        expect(component.template).toEqual(TwitterCardTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component.controllerAs).toBeTruthy();
      });

  });
});
