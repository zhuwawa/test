require.config({

	paths:{
		//定义别名
		math:'./js/math',
		jquery:'./lib/jquery-1.12.3',
		underscore:'./lib/underscore',
		backbone:'./lib/backbone',
		text:'./lib/text',
		router:'./js/back',
		home:'./compoent/home/home'
	},
	shim:{
		//不支持amd规范模块定义
		'underscore':{
			// 不支持AMD规范的模块，定义别名
			export:'underscore',
			deps:[]
		}
		// 'jquery.form'{
		// 	// 依赖于jquery的第三方模块
		// 	deps:['jquery']
		// }
	}
})
//参数与模块一一对应,异步,全部加载完后才执行
require(['math','underscore','backbone','jquery','router'],function(math,a,b,$){
	// var result = math.add(1,2);
	console.log($);
	console.log(a);
	//监听地址锚点的变化
	console.log(Backbone);

	console.log($('#con').get(0));
	Backbone.history.start();
})