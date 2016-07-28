
/// <reference path="../typings/index.d.ts" />

interface userService {
	checkPhone(phone: string): boolean
}

define(['app'], function(app: angular.IModule) {
	app.service('userService', [function() {
		this.version = function() {
			return 'lingmall scaffolding version 0.1.0';
		};

		let service: userService = {
			checkPhone: (phone) => {
				return phone != '1234567890-';
			}
		};

		_.each(service, (v, k) => {
			this[k] = v;
		})
	}]);
});
