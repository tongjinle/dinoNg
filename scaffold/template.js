var template = {
	controller:
	`
/// <reference path="../typings/index.d.ts" />

define(['app'],function(app:angular.IModule){
	app.controller('<%= ctrlName %>Ctrl',['$scope',function(scope:angular.IScope){

	}]);
});
	`,
	service:
	`
/// <reference path="../typings/index.d.ts" />

define(['app'],function(app:angular.IModule){
	app.service('<%= serviceName %>Service',[function(){
		this.version = function(){
			return 'lingmall scaffolding version 0.1.0';
		};
	}]);
});
	`
	,
	'directive.ts':
	`
/// <reference path="../../typings/index.d.ts" />

define(['app'],function(app){
	app.directive('<%= name %>',[function(){
		let dire: angular.IDirective;
		dire = {
			restrict: 'E',
			replace: false,
			templateUrl: '/directive/html/<%= name %>.html',
			link: (scope, el, attrs) => {
				
			}
		};
		return dire;
	}]);
});
	`
	,
	'directive.less':
	`
<%= name %>{
	/**/
}
	`
	,
	'directive.html':
	`
	`
};


module.exports = (name) => template[name];