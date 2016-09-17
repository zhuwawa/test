define(['text!./compoent/count/count.html','css!./compoent/count/count.css','jquery'],function(content){
	function setCount(){
		$('.main').html(content);
		setData();
	}

	function setData(){
		$('.footer').hide();
		$('.bottom1 span').on('tap',function(){
			var a = $('.bottom1 span').index(this);
			$(".bottom1 span").css('border','none');
			$(this).css({'borderWidth':'0.05rem','borderBottomColor':'red','borderBottomStyle':'solid'});
			$('.count-data').hide();
			$('.count-data').eq(a).show();
		})
	}
	return{
		setCount:setCount
	}
})
