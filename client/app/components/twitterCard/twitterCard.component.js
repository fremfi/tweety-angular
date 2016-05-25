import template from './twitterCard.html';
import controller from './twitterCard.controller';
import './twitterCard.styl';

let twitterCardComponent = {
  restrict: 'E',
  bindings: {
    fullName: '<',
    userName: '<',
    img: '<',
    tweetTime: '<',
    content: '<',
    retweetCount: '<',
    favoriteCount: '<',
    tweetIdStr: '<'
  },
  template,
  controller:['$sce', controller],
  controllerAs: 'vm'
};

export default twitterCardComponent;
