import StreamModule from './stream'
import StreamController from './stream.controller';
import StreamComponent from './stream.component';
import StreamTemplate from './stream.html';

describe('Stream', () => {
  let $rootScope, makeController;

  beforeEach(window.module(StreamModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new StreamController();
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
      let component = StreamComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(StreamTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });
  });
});
