/// <reference path="../../typings/index.d.ts" />

define(['app', 'testService', 'sinyooService'], (app: angular.IModule) => {
	app.directive('test', ['testService', 'sinyooService', (testService, sinyooService) => {
		let dire: angular.IDirective;
		dire = {
			restrict: 'E',
			replace: false,
			templateUrl: '/directive/html/test.html',
			link: (scope, el, attrs) => {
				scope['name'] = 'dino';
				scope['serviceInfo'] = testService.get();

				sinyooService.test().success((data) => {
					console.log(data);
				})
			}
		};
		return dire;
	}]);
});
