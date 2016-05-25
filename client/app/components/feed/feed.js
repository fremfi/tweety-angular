import angular from 'angular';
import uiRouter from 'angular-ui-router';
import feedComponent from './feed.component';

let feedModule = angular.module('feed', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('feed', {
      url: '/',
      template: '<feed></feed>'
    });
})

.component('feed', feedComponent);

export default feedModule;
