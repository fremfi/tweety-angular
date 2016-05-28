import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from '../../common/common';
import streamComponent from './stream.component';

let streamModule = angular.module('stream', [
  uiRouter,
  Common.name
])

.component('stream', streamComponent);

export default streamModule;
