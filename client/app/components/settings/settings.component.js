import template from './settings.html';
import controller from './settings.controller';
import './settings.styl';

let settingsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default settingsComponent;
