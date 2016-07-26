
/// <reference path="../typings/index.d.ts" />

define(['app'/*,'signalR.stockTicker'*/],function(app:angular.IModule){
	app.controller('stockCtrl',['$scope',function(scope:angular.IScope){
		console.log(window['signalStart']);
		window['signalStart']();
	}]);
});
	