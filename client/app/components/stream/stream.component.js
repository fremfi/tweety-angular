import template from './stream.html';
import controller from './stream.controller';
import './stream.styl';

let streamComponent = {
  restrict: 'E',
  bindings: {
    userName: '<',
    tweetCount: '<',
    startDate: '<',
    endDate: '<'
  },
  template,
  controller: ['$http', 'TweetFactory', controller],
  controllerAs: 'vm'
};

export default streamComponent;
