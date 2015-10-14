angular.module('appRock.services', [])

.factory('MetaService', function() {
       var title = 'Test';
       var metaDescription = '';
       var metaKeywords = '';      
       return{
          set: function(newTitle, newMetaDescription, newKeywords) {
              metaKeywords = newKeywords;
              metaDescription = newMetaDescription;
              title = newTitle; 
          },
          metaTitle: function(){ return title; },
          metaDescription: function() { return metaDescription; },
          metaKeywords: function() { return metaKeywords; }
       }     
    })
.factory('TrustSrc', ['$sce', function ($sce) {
        //return $resource('/employees/:employeeId/:data');
        //return $resource('http://localhost\\:1337/employees/:employeeId/:data');
        return {
        	traslate: function(src){
        		return $sce.trustAsResourceUrl(src);
        	}
        }
  }])
 	