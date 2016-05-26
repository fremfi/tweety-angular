import template from './settings.html';
import controller from './settings.controller';
import './settings.styl';

let settingsComponent = {
  restrict: 'E',
  bindings: {
    settings: '='
  },
  template,
  controller:['$state', controller],
  controllerAs: 'vm'
};

export default settingsComponent;
