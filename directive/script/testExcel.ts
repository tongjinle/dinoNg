
/// <reference path="../../typings/index.d.ts" />

define(['app'], function(app) {
	app.directive('testExcel', [function() {
		let dire: angular.IDirective;
		dire = {
			restrict: 'E',
			replace: false,
			templateUrl: '/directive/html/testExcel.html',
			link: (scope, el, attrs) => {
				scope['excelData'] = [{ id: 1, name: 'apple' }, { id: 2, name: 'orange' }, { id: 3, name: 'banana' }];
				scope.$on("cellCursor", (e, ...args) => {
					console.log(e, args);
					console.log(e);
				});


				scope['getName'] = function(i) {
					return function() {
						return "[" + i.name + "]";
					}
				};

				scope['setName'] = function(i) {
					return function(v) {
						if (v != "badname") {
							return i.name = v;
						}
					}
				}
			}
		};
		return dire;
	}]);
});
