require.config({
	paths:{
		jquery:'./js/jquery-1.12.3',
		zepto:'./js/zepto',
		touch:'//cdn.bootcss.com/touchjs/0.2.14/touch.min',
		underscore:'./js/underscore',
		backbone:'./js/backbone',
		text:'./js/text',
		css:'./js/css',
		bootstrape:'./js/bootstrap',
		swiper:'./js/swiper-3.3.1.min',
		router:'./routing',
		data:'./js/data',
		home:'./compoent/home/home',
		muse:'./compoent/muse/muse',
		card:'./compoent/card/card',
		me:'./compoent/me/me',
		count:'./compoent/count/count'
	},
	shim:{
		swiper:{
			exports:'swiper',
			deps:['jquery']
		},
		touch:{
			exports:'touch'
		},
	}
});
require(['jquery','backbone','home','muse','router'],function($,backbone,home){
	Backbone.history.start();
	home.render();
	var arr = ['home','muse','card','me'];
	var i = arr.indexOf(window.location.hash.substr(2,5));
	if(i == -1){
		i=0;
	}
	$('.footer div').find('span').css('color','#bfbfbf');
	$('.footer div').eq(i).find('span').css('color','#dd7663');
	$('.footer div').on('touchstart',function(){
		var i = $('.footer div').index(this);
		$('.footer div').find('span').css('color','#bfbfbf');
		$('.footer div').eq(i).find('span').css('color','#dd7663');
	})
});