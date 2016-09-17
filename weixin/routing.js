define(['jquery','backbone'],function($,backbone){
	var Router = backbone.Router.extend({
		routes:{
			'home':'homefun',
			'muse':'musefun',
			'card':'cardfun',
			'me':'mefun',
			'count':'countfun'
		},
		homefun:function(){
			require(['home'],function(home){
				home.render();
			});
		},
		musefun:function(){
			require(['muse'],function(muse){
				muse.setMuse();
			})
		},
		cardfun:function(){
			require(['card'],function(card){
				card.setCard();
			})
		},
		mefun:function(){
			require(['me'],function(me){
				me.setMe();
			})
		},
		countfun:function(){
			
			require(['count'],function(count){
				count.setCount();
			})
		}
	});
	var route = new Router();
})