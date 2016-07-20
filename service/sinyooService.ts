/// <reference path="../typings/index.d.ts" />

define(['app'], (app: angular.IModule) => {
	app.service('sinyooService', ['$http',function(http:angular.IHttpService) {
	
		this.test = ()=> {
			let url = 'http://192.168.20.11:9494/api/default/test';
			return http.get(url);
		};
	}]);
});
