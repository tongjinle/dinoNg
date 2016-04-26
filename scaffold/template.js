var template = {
	controller:
	`
define(['app'],function(app,test){
	app.controller('<%= ctrlName %>Ctrl',['$scope',function(scope){

	}]);
});
	`,
	service:
	`
define(['app'],function(app){
	app.service('<%= serviceName %>Service',[function(){
		this.version = function(){
			return 'lingmall scaffolding version 0.1.0';
		};
	}]);
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