import angular from 'angular';
import Feed from './feed/feed';
import Settings from './settings/settings';
import Stream from './stream/stream';
import TwitterCard from './twitterCard/twitterCard';

let componentModule = angular.module('app.components', [
  Feed.name,
  Settings.name,
  Stream.name,
  TwitterCard.name
]);

export default componentModule;
