/// <reference path="../typings/index.d.ts" />

define(['app'], (app: angular.IModule) => {
	app.service('testService', function() {

		this.get = () => {
			return 'typescript angular';
		};
	});
});
