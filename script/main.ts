/// <reference path="../typings/index.d.ts" />
let config: RequireConfig = {
	baseUrl: './dist/js',
	paths: {
		angular: '/bower_components/angular/angular',
		angularRoute: "/bower_components/angular-route/angular-route.min",
		angularExcel:"/bower_components/cell-cursor/cellCursor",
		// base
		app: './script/app',
		route: './script/route',

		// controller
		loginCtrl:'./controller/loginCtrl',
		testExcelCtrl:'./controller/testExcelCtrl',
		testCtrl: './controller/testCtrl',

		// directive
		login:'./directive/script/login',
		testExcel:'./directive/script/testExcel',
		test: './directive/script/test',

		// service
		testService: './service/testService',
		sinyooService:'./service/sinyooService',

		// end tail
		jquery: "/bower_components/jquery/dist/jquery.min"
	},
	//加载顺序规则
	shim: {
		angularRoute: ["angular"],
		angularExcel:["angular"]
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




