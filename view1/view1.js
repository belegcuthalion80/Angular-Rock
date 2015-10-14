'use strict';

angular.module('appRock.view1', ['ngRoute'])



.controller('RollingController', ['$rootScope','$scope','TrustSrc','MetaService',function($rootScope,$scope,TrustSrc,MetaService) {

	console.log("Rolling");
	$rootScope.metaservice = MetaService;
	$scope.parametros =
		{
			banda:"Rolling",
			Direccion:"https://www.youtube.com/embed/SGyOaCXr8Lw", 
			Foto:"img/rolling.png" , 
			texto:"The Rolling Stones es una banda británica de rock originaria de Londres."+
			"La banda se fundó en abril de 19622 por Brian Jones, Mick Jagger, Keith Richards,"+ 
			"Ian Stewart y Mick Taylor. El guitarrista Geoff Bradford y el baterista Mick Avory"+ 
			"los apoyaron en sus primeros ensayos, mientras que los bateristas Tony Chapman y"+ 
			"Carlo Little3 tocaron en sus primeras actuaciones."
		};
		$rootScope.metaservice.set("Rolling Stones",$scope.parametros.texto,"Rolling Stones Jagger");
	
		$scope.trustSrc = function(src) {
    		return TrustSrc.traslate(src);
    
  		}

}])
.controller('BeatlesController', ['$rootScope','$scope','TrustSrc','MetaService',function($rootScope,$scope,TrustSrc,MetaService) {

	console.log("Beatles");
	$rootScope.metaservice = MetaService;
	$scope.parametros=
		{
			banda:"Beatles",
			Direccion:"https://www.youtube.com/embed/Brlf-ImCH38" , 
			Foto:"img/beatles.jpg" , 
			texto:"The Beatles fue una banda de rock inglesa activa durante la década de 1960, "+
			"y reconocida como la más exitosa comercialmente y críticamente aclamada en la historia"+
			" de la música popular.1 2 3 4 5 6 Formada en Liverpool, estuvo constituida desde 1962 "+
			"por John Lennon (guitarra rítmica, vocalista), Paul McCartney (bajo, vocalista), "+
			"George Harrison (guitarra solista, vocalista) y Ringo Starr (batería, vocalista). "+
			"Enraizada en el skiffle y el rock and roll de los años cincuenta, la banda trabajó "+
			"más tarde con distintos géneros musicales, que iban desde las baladas pop hasta el rock "+
			"psicodélico, incorporando a menudo elementos clásicos, entre otros, de forma innovadora "+
			"en sus canciones. La naturaleza de su enorme popularidad, que había emergido primeramente "+
			"con la moda de la «Beatlemanía», se transformó al tiempo que sus composiciones se volvieron "+
			"más sofisticadas. Llegaron a ser percibidos como la encarnación de los ideales progresistas, "+
			"extendiendo su influencia en las revoluciones sociales y culturales de la década de 1960."
		};
		$rootScope.metaservice.set("Beatles",$scope.parametros.texto,"McCartney Lennon Ringo George Harrison");
	
	$scope.trustSrc = function(src) {
    	return TrustSrc.traslate(src);
    
  	}

}])
.controller('QueenController', ['$rootScope','$scope','TrustSrc','MetaService',function($rootScope,$scope,TrustSrc,MetaService) {

	console.log("Queen");
	$rootScope.metaservice = MetaService;
	
	$scope.parametros=
		{
			banda:"Queen",
			Direccion:"https://www.youtube.com/embed/g2N0TkfrQhY", 
			Foto:"img/QueenForever.jpg" , 
			texto:"Queen es una banda británica de rock formada en 1970 en Londres "+
			"por el cantante Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor"+
			" y el bajista John Deacon. Si bien el grupo ha presentado bajas de dos de sus miembros"+
			" (Freddie Mercury, que murió en 1991 y John Deacon, que se retiró en 1997), "+
			"los integrantes restantes, Brian May y Roger Taylor, continúan trabajando bajo"+
			" el nombre Queen, por lo que la banda aún es considerada activa.4 "
		};
	$rootScope.metaservice.set("Queen",$scope.parametros.texto,"Queen Freddie Mercury");
	
	$scope.trustSrc = function(src) {
    	return TrustSrc.traslate(src);
    
  	}

	
}])
.controller('Metatroller', ['$scope','$rootScope','MetaService',function($rootScope,$scope,MetaService) {

	console.log("Meta");
	$rootSCope.metaservice = MetaService;
		
	
	
}])
;