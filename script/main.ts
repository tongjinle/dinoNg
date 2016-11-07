/// <reference path="../typings/index.d.ts" />
let config: RequireConfig = {
	baseUrl: './dist/js',
	paths: {
		angular: '/node_modules/angular/angular',
		angularRoute: "/node_modules/angular-route/angular-route.min",
		// base
		app: './script/app',
		route: './script/route',

		// controller
		testCtrl: './controller/testCtrl',

		// directive
		test: './directive/script/test',

		// service
		testService: './service/testService',

		// end tail
		jquery: "/node_modules/jquery/dist/jquery.min"
	},
	//加载顺序规则
	shim: {
		angularRoute: ["angular"]
	}
};
require.config(config);



requirejs(['app', 'route', 'jquery'], (app: angular.IModule, route: { init: Function }) => {
	console.log('app');
	route.init();
	$(() => {
		angular.bootstrap(document.body, [app.name]);
		console.log('dom ready');
	});

});




