/// <reference path="../typings/index.d.ts" />

define(['app','test'],(app:angular.IModule,test)=>{
	app.controller('testCtrl',['$scope',(scope)=>{
		scope.timeStamp = +new Date;
	}]);
});
