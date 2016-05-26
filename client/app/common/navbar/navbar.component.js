import template from './navbar.html';
import controller from './navbar.controller';

let navbarComponent = {
  restrict: 'E',
  bindings: {
    settings: '='
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default navbarComponent;
