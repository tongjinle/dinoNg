var template = {
	controller:
	`
/// <reference path="../../typings/index.d.ts" />

define(['app'],(app:angular.IModule)=>{
	app.controller('<%= ctrlName %>Ctrl',['$scope',(scope)=>{

	}]);
});

	`,
	service:
	`
/// <reference path="../../typings/index.d.ts" />

define(['app'], (app: angular.IModule) => {
	app.service('<%= serviceName %>Service', function() {

		this.get = () => {
			return 'typescript angular';
		};
	});
});

	`
	,
	'directive.js':
	`
define(['app'],function(app){
	app.directive('<%= name %>',[function(){
		return {
			restrict:'E',
			replace:false,
			templateUrl:'../directive/html/<%= name %>.html',
			link:function(scope,elements,attrs){
				
			}
		};
	}]);
});

/// <reference path="../../typings/index.d.ts" />

define(['app'], (app: angular.IModule) => {
	app.directive('<%= name %>', [() => {
		let dire: angular.IDirective;
		dire = {
			restrict: 'E',
			replace: false,
			templateUrl: '/directive/html/<%= name %>.html',
			link: (scope: any, el, attrs) => {
				
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