/// <reference path="../typings/index.d.ts" />

define(['app',
	'testCtrl',
	'testExcelCtrl',
	'loginCtrl'
	],
	(app: angular.IModule) => {
		return {
			init: () =>
				app.config(['$routeProvider', (routeProvider: angular.route.IRouteProvider) => {
					routeProvider
						.when('/test', {
							templateUrl: 'view/test.html',
							controller: 'testCtrl'
						})
						.when('/testExcel',{
							templateUrl:'view/testExcel.html',
							controller:'testExcelCtrl'
						})
						.when('/login',{
							templateUrl:'view/login.html',
							controller:'loginCtrl'
						})
						.otherwise('/login');
				}])
		};
	}
);
