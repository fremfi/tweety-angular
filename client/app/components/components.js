import angular from 'angular';
import Feed from './feed/feed';
import Stream from './stream/stream';
import TwitterCard from './twitterCard/twitterCard';

let componentModule = angular.module('app.components', [
  Feed.name,
  Stream.name,
  TwitterCard.name
]);

export default componentModule;
