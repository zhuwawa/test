define(['text!./compoent/card/card.html','css!./compoent/card/card.css','jquery'],function(content){
	function setCard(){
		$('.footer').show();
		$('.main').html(content);
		info();
	}
	function info(){
		$('.top-main').on('tap',function(){
			console.log(123);
			$('.card-info').animate({
				left:0},
				500);
		});
		$('.btn').eq(0).on('tap',function(){
			console.log(123);
			$('.card-info').animate({
				left:'16rem'},
				300);
		});
	}
	return{
		setCard:setCard
	}
});