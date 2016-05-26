import template from './feed.html';
import controller from './feed.controller';

let feedComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default feedComponent;
