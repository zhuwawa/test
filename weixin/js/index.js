require.config({
	paths:{
		jquery:'./js/jquery-1.12.3',
		underscore:'./js/underscore',
		backbone:'./js/backbone',
		text:'./js/text',
		css:'./js/css',
		bootstrape:'./js/bootstrap',
		route:'./routing'
	}
})

require(['jquery','backbone','route'],function($,backbone,route){

	backbone.history.start();


})