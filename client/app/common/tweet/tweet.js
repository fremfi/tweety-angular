import angular from 'angular';
import TweetFactory from './tweet.factory';
import TweetService from './tweet.service';

let tweetModule = angular.module('tweet', [])

.factory('TweetFactory', TweetFactory)
.service('TweetService', TweetService);
TweetFactory.$inject = ['$http'];
TweetService.$inject = ['TweetFactory'];

export default tweetModule;
