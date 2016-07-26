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
		stockCtrl:'./controller/stockCtrl',
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

		// vendor
		'signalR':'./vendor/signalR',
		'signalR.stockTicker':'./vendor/signalR.stockTicker',
		'jquery-1.10.2':'./vendor/jquery-1.10.2.min',
		'jquery.color':'./vendor/jquery.color-2.1.2.min',
		'jquery.signalR':'./vendor/jquery.signalR-2.2.1',
		'signalRHubs':'http://192.168.20.11:9494/signalr/hubs/',
		'signalRHubs2':'./vendor/signalRHubs2',

		// end tail
		jquery: "/bower_components/jquery/dist/jquery.min"
	},
	//加载顺序规则
	shim: {
		angularRoute: ["angular"],
		angularExcel:["angular"],
		'jquery.color':['jquery-1.10.2'],
		'jquery.signalR':['jquery-1.10.2','jquery.color'],
		'signalRHubs2':['signalRHubs'],
		// 'signalR.stock':['jquery-1.10.2','jquery.color','jquery.signalR','signalRHubs','signalRHubs2']
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




