define(['jquery','backbone'],function($,backbone){
	var Router = backbone.Router.extend({
		routes:{
			'home':'homefun',
			'muse':'musefun',
			'card':'cardfun',
			'me':'mefun'
		},
		homefun:function(){
			require(['home'],function(home){
				home.render();
			});
		},
		musefun:function(){
			require(['text!./compoent/muse/muse.html'],function(content){
				$('.main').html(content);
			})
		}
		// cardfun:function(){
		// 	require(['text!./compoent/card/card.html','css!./compoent/card/card.css'],function(content){
		// 		$('.main').html(content);
		// 	})
		// },
		// mefun:function(){
		// 	require(['text!./compoent/me/me.html','css!./compoent/me/me.css'],function(content){
		// 		$('.main').html(content);
		// 	})
		// }
	});
	var route = new Router();
})