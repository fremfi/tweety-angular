import template from './app.html';
import controller from './app.controller';
import './app.styl';

let appComponent = {
  template,
  restrict: 'E',
  controller,
  controllerAs: 'root'
};

export default appComponent;
