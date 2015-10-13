angular.module('appRock.services', [])

    .factory('TrustSrc', ['$sce', function ($sce) {
        //return $resource('/employees/:employeeId/:data');
        //return $resource('http://localhost\\:1337/employees/:employeeId/:data');
        return {
        	traslate: function(src){
        		return $sce.trustAsResourceUrl(src);
        	}
        }
  }]);