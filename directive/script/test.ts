/// <reference path="../../typings/index.d.ts" />

define(['app', 'testService'], (app: angular.IModule) => {
	app.directive('test', ['testService', (testService) => {
		let dire: angular.IDirective;
		dire = {
			restrict: 'E',
			replace: false,
			templateUrl: '/directive/html/test.html',
			link: (scope: any, el, attrs) => {
				scope.name = 'dino';
				scope.serviceInfo = testService.get();
			}
		};
		return dire;
	}]);
});
