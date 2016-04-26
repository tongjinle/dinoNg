var minimist = require('minimist');
var path = require('path');
var template = require('./template');
var fs = require('fs');

module.exports = function(){
	var alias = {
		'a': 'action',
		'c': 'controller',
		'ctrl': 'controller',
		's': 'service',
		'd': 'directive'
	};
	var opts = {
		alias: alias
	};
	var argv = minimist(process.argv.slice(2), opts);
	console.dir(argv);

	var action = argv.action;
	var controller = argv.controller;
	var directive = argv.directive;
	var service = argv.service;

	var type = controller ? 'controller' : directive ? 'directive' : service ? 'service' : null;
	if (!type) {
		console.error('no such type');
		process.exit(1);
	}

	if (!~['add', 'remove'].indexOf(action)) {
		console.error('no such action');
		process.exit(1);
	}

	var dict = {
		'add controller': function(action, type, name, cb) {

			var file = resolveFile(type,name);
			var fullName = /Ctrl$/.test(name) ? name : name + 'Ctrl';
			var content = template(type).replace(/<%=\s?ctrlName\s?%>/,fullName);

			addFile(file, content);
			defineFile(action,type,name);
		},
		'remove controller': function(action, type, name, cb) {
			var file = resolveFile(type,name);
			var fullName = /Ctrl$/.test(name) ? name : name + 'Ctrl';
			removeFile(file);
			defineFile(action,type,name);
		},
		'add service':function(action, type, name){
			var file = resolveFile(type,name);
			var fullName = /Service$/.test(name) ? name : name + 'Service';
			var content = template(type).replace(/<%=\s?serviceName\s?%>/,fullName);
			console.log(fullName,content);
			addFile(file,content);
			defineFile(action,type,name);
		},
		'remove service':function(action,type,name){
			var file = resolveFile(type,name);
			var fullName = /Service$/.test(name) ? name : name + 'Service';
			removeFile(file);
			defineFile(action,type,name);
		},
		'add directive':function(action,type,name){
			var jsFile = [path.resolve(__dirname, '..\\'+type+'\\script'), name+'.js'].join('\\');
			var jsContent = template(type+".js").replace(/<%=\s?name\s?%>/g,name);
			addFile(jsFile,jsContent);
			defineFile(action,type,name);

			var lessFile = [path.resolve(__dirname, '..\\'+type+'\\less'), name+'.less'].join('\\');
			var lessContent = template(type+".less").replace(/<%=\s?name\s?%>/g,name);
			addFile(lessFile,lessContent);

			
			var htmlFile = [path.resolve(__dirname, '..\\'+type+'\\html'), name+'.html'].join('\\');
			var htmlContent = template(type+".html").replace(/<%=\s?name\s?%>/g,name);
			addFile(htmlFile,htmlContent);


		},
		'remove directive':function(action,type,name){
			var jsFile = [path.resolve(__dirname, '..\\'+type+'\\script'), name+'.js'].join('\\');
			removeFile(jsFile);
			defineFile(action,type,name);

			var lessFile = [path.resolve(__dirname, '..\\'+type+'\\less'), name+'.less'].join('\\');
			removeFile(lessFile);

			
			var htmlFile = [path.resolve(__dirname, '..\\'+type+'\\html'), name+'.html'].join('\\');
			removeFile(htmlFile);
		}

	};

	var addFile = (file, content) => {
		var cwd = process.cwd();
		var arr = file.replace(process.cwd(), '').split('\\');
		arr.slice(0,-1).forEach((n,i)=>{
			if(n==''){return;}
			cwd += '\\'+n;
			if(!fs.existsSync(cwd)){
				fs.mkdirSync(cwd);
			}
		});
		cwd += '\\'+arr[arr.length-1];
		content = content
		fs.writeFileSync(cwd,content);
	};

	var removeFile = (file) => {
		fs.existsSync(file) && fs.unlinkSync(file);
	};

	var resolveFile = (type,name,ext)=>{
		ext = ext || 'js';
		return [path.resolve(__dirname, '..\\', type), name+'.'+ext].join('\\');
	};

	var defineFile = (action,type,name) =>{
		var file = path.resolve(__dirname,'..\\script\\main.js')
		var content = fs.readFileSync(file,'utf8');
		var typeSuffix = type == 'controller' ? 'Ctrl' : type == 'service' ? 'Service' : type == 'directive' ? '' : null;
		var fullName = new RegExp(typeSuffix+'$').test(name) ? name : name+typeSuffix;
		var arr = content.split('\n');
		var arr2 = [];
		var re;
		if(action == 'add'){
			re = new RegExp('\/\/\\s?'+type);
			arr.forEach((n,i)=>{
				arr2.push(n);
				if(re.test(n)){
					arr2.push(`\t\t${fullName}:'./${type}/${fullName}',`);
				}
			});
		}else if(action == 'remove'){
			re = new RegExp(`${fullName}:'./${type}/${fullName}'`);
			arr.forEach((n,i)=>{
				if(!re.test(n)){
					arr2.push(n);
				}
			})
		}
		fs.writeFileSync(file,arr2.join('\n'));
		return;

	};

	console.log(action,type,argv[type]);
	dict[[action, type].join(' ')](action, type, argv[type]);
};
