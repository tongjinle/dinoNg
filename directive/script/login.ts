
/// <reference path="../../typings/index.d.ts" />

define(['app'],function(app){
	app.directive('login',[function(){
		let dire: angular.IDirective;
		dire = {
			restrict: 'E',
			replace: false,
			templateUrl: '/directive/html/login.html',
			link: (scope, el, attrs) => {
				
			}
		};
		return dire;
	}]);
});
	