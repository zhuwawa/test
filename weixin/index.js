require.config({
	paths:{
		jquery:'./js/jquery-1.12.3',
		touch:'//cdn.bootcss.com/touchjs/0.2.14/touch.min',
		underscore:'./js/underscore',
		backbone:'./js/backbone',
		text:'./js/text',
		css:'./js/css',
		bootstrape:'./js/bootstrap',
		swiper:'./js/swiper-3.3.1.min',
		router:'./routing',
		data:'./js/data',
		home:'./compoent/home/home'
	},
	shim:{
		swiper:{
			exports:'swiper'
		},
		touch:{
			exports:'touch'
		}
	}
});
require(['jquery','backbone','home','touch','router'],function($,backbone,home){
	Backbone.history.start();
	$('.footer div').on('touchstart',function(){
		var i = $('.footer div').index(this);
		$('.footer div').find('span').css('color','#bfbfbf');
		$('.footer div').eq(i).find('span').css('color','#dd7663');
	})
});