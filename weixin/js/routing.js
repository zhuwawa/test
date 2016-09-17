define(['backbone'],function($,backbone)){
	var Router = backbone.Router.$.extend(
		routs{
			home:'honefun',
			muse:'musefun',
			card:'cardfun',
			me:'mefun'
		},
		homefun:function(){
			require(['text!./home.html','css./home.css'],function(content){
				$('.main').html(content);
				console.log(123);
			})
		},
		// musefun:function(){
		// 	require(['text!./muse.html','css./muse.css'],function(content){
		// 		$('.main').html(content);
		// 	})
		// },
		// cardfun:function(){
		// 	require(['text!./card.html','css./card.css'],function(content){
		// 		$('.main').html(content);
		// 	})
		// },
		// mefun:function(){
		// 	require(['text!./me.html','css./me.css'],function(content){
		// 		$('.main').html(content);
		// 	})
		// }
	);
	var router = new Router();
	
}