import angular from 'angular';
import Navbar from './navbar/navbar';
import Tweet from './tweet/tweet';

let commonModule = angular.module('app.common', [
  Navbar.name,
  Tweet.name
]);

export default commonModule;
