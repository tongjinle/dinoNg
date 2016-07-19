/// <reference path="../typings/index.d.ts" />

define(['app', 'testCtrl'],
	(app: angular.IModule) => {
		return {
			init: () =>
				app.config(['$routeProvider', (routeProvider: angular.route.IRouteProvider) => {
					routeProvider
						.when('/', {
							templateUrl: 'view/test.html',
							controller: 'testCtrl'
						})
						.otherwise('/');
				}])
		};
	}
);
