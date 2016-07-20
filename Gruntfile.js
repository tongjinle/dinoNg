module.exports = function (grunt) {  
	require("colors");
	// show elapsed time at the end  
	require('time-grunt')(grunt);  
	// load all grunt tasks  
	require('load-grunt-tasks')(grunt);

	// typescript 
	var tsSource = ['script/**/*.ts','directive/script/**/*.ts','controller/**/*.ts','service/**/*.ts'];
	var tsDist = 'dist/js/';  

	// less
	var lessSource = ['less/**/*.less', 'directive/less/**/*.less'];
	// -- VERDOR LESS
	// START
	lessSource.push('/bower_components/cell-cursor/cellCursor.css');
	// END
	var lessDist = 'css/bundle.css';


	// watchPathList
	var watchPathList = {
		'main':['main.html','main-dev.html'],
		'html':['view/**/*.{html,htm}','directive/**/*.{html,htm}'],
		'css':'css/bundle.css',
		'js':'/dist/js/**/*.js'
	};
	var arr = [];
	for(var key in watchPathList){
		arr = arr.concat(watchPathList[key]);
	}
	console.log(arr);

	// livereload
	var livereload = '';


	grunt.initConfig({ 
		watch: {  
			livereload: {  
				options: {  
					livereload: '<%= connect.options.livereload %>'    
				},  
				files: arr
			},
			less:{
				files:lessSource,
				tasks:["less"]
			},
			typescript:{
				files:tsSource,
				tasks:['typescript']
			}
		},
		less:{
			dev:{
				files:{
					'css/bundle.css':lessSource
				}
			}
		} ,

		connect: {  
			options: {  
				port: 9494,  
				livereload: 35731,  
				// change this to '0.0.0.0' to access the server from outside  
				// hostname: '192.168.20.11'  
				hostname:'localhost'
			},  
			livereload: {  
				options: {  
					open: 'http://<%= connect.options.hostname %>:<%= connect.options.port %>/main-dev.html',  
				}  
			},
			genDoc:{
				options:{
					open:'http://<%= connect.options.hostname %>:<%= connect.options.port %>/<%= jsdoc.dist.options.destination%>/index.html'
				}
			},
			produce:{
				options:{
					open:'http://<%= connect.options.hostname %>:<%= connect.options.port %>/main.html'
				}
			}
		},
		requirejs: {
			compile: {
				options: {
				baseUrl: "./",
				mainConfigFile: "script/main.js",
				// name: "path/to/almond",
				/* 
				assumes a production build using almond, if you don't use almond, you
				need to set the "includes" or "modules" option instead of name 
				*/
				// optimize: "none",
				include: [ "script/main.js" ],
				out: "minSrc/min.js"
				}
			}
		},
		jsdoc: {
			dist: {
				src: ['service/script/*.js','script/*.js'],
				options: {
					destination: 'doc',
					   template : "node_modules/ink-docstrap/template",
					  configure : "node_modules/ink-docstrap/template/jsdoc.conf.json"
				}
			}
		},
		typescript: {
			base: {
				src: tsSource,
				dest: tsDist,
				options: {
					generateTsConfig :true,
					module: 'amd', //or commonjs 
					target: 'es5', //or es3 
					sourceMap: true,
					declaration: true
				}
			}
		},
		typedoc: {
			base: {
				src: '<%= typescript.base.src %>',
				options: {
					module: '<%= typescript.base.options.module %>',
					out: './docs',
					name: 'my-doc',
					target: '<%= typescript.base.options.target %>'
				}
			}
},
		
	   
	});  

	grunt.registerTask('serve', function () {  
		grunt.task.run([  
			'less',
			'typescript',  
			'connect:livereload',  
			'watch'
		]);  
	});

	grunt.registerTask('genDoc',function(){
		grunt.task.run([
			'jsdoc',
			'connect:genDoc',
			'watch'
		]);
	});

	grunt.registerTask('produce',function(){
		grunt.task.run([
			'less',
			'requirejs',
			'connect:produce'
		]);
	});

	grunt.registerTask('viewProduce',function(){
		grunt.task.run([
			'connect:produce',
			'watch'
		]);
	})
  

	grunt.registerTask('default', ['serve']);  
};  

