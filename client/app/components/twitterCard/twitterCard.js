import angular from 'angular';
import uiRouter from 'angular-ui-router';
import twitterCardComponent from './twitterCard.component';

let twitterCardModule = angular.module('twitterCard', [
  uiRouter
])

.component('twitterCard', twitterCardComponent);

export default twitterCardModule;
