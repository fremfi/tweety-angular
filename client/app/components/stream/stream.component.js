import template from './stream.html';
import controller from './stream.controller';
import './stream.styl';

let streamComponent = {
  restrict: 'E',
  bindings: {
    userName: '<',
    tweetCount: '<'
  },
  template,
  controller: ['$http', controller],
  controllerAs: 'vm'
};

export default streamComponent;
