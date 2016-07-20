/// <reference path="../typings/index.d.ts" />

define(['app','test'],(app:angular.IModule,test)=>{
	app.controller('testCtrl',['$scope',(scope:angular.IScope)=>{
		scope['timeStamp'] = +new Date;
	}]);
});
