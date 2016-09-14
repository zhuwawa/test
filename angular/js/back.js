define(['backbone'],function(backbone){
	console.log(Backbone.Router);
	var Router = Backbone.Router.extend({
		routes:{
			'home':'homefunc',
			'list':'listfunc'
		},
		homefunc:function(){
			// 传参
			require(['text!../home.html'],function(home){
				$('#con').html(home);
			})
		},
		listfunc:function(){
			require(['text!../list.html'],function(list){
				$('#con').html(list);
			})
		}
	});

	var router = new Router();
	return router;
})