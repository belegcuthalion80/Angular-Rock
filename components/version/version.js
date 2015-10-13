'use strict';

angular.module('appRock.version', [
  'appRock.version.interpolate-filter',
  'appRock.version.version-directive'
])

.value('version', '0.1');
