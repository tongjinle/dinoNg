
/// <reference path="../../typings/index.d.ts" />

define(['app','userService'], function(app,userService:userService) {
	app.directive('register', [function() {
		let dire: angular.IDirective;
		dire = {
			restrict: 'E',
			replace: false,
			templateUrl: '/directive/html/register.html',
			link: (scope, el, attrs) => {
				let checkDict = {
					['phone']: true
				};

				scope['checkDict'] = checkDict;


				// check
				scope['checkPhone'] = ()=>{

				};
			}
		};
		return dire;
	}]);
});
