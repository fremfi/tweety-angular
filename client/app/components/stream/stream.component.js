import template from './stream.html';
import controller from './stream.controller';

let streamComponent = {
  restrict: 'E',
  bindings: {
    userName: '<',
    tweetCount: '<',
    startDate: '<',
    endDate: '<'
  },
  template,
  controller: ['$http', controller],
  controllerAs: 'vm'
};

export default streamComponent;
