define(['text!./compoent/me/me.html','css!./compoent/me/me.css'],function(content){
	function setMe(){
		$('.footer').show();
		$('.main').html(content);
		$('.comment-btn').eq(0).on('tap',function(){
			$('.comment-all').hide();
		});
		$('.me-choice li').eq(5).on('tap',function(){
			$('.comment-all').show();
		});
	}
	return{
		setMe:setMe
	}
});
