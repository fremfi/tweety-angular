import angular from 'angular';
import TweetFactory from './tweet.factory';

let tweetModule = angular.module('tweet', [])

.factory('TweetFactory', TweetFactory);
TweetFactory.$inject = ['$http'];

export default tweetModule;
