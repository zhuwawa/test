require(['text!./compoent/home/home.html','css!./compoent/home/home.css','swiper','jquery'],function(content){
	$('.main').html(content);
	setData();
})





function setData(){
	$.ajax({
		url: 'http://duif.applinzi.com/leyuan/home_data.php',
		type: 'get',
		dataType: 'json',
		success:function(res){
			console.log(res);
			setSlider(res.slider);
		}
	});
	function setSlider(arr){
		console.log(arr);
		require(['swiper'],function(){
			for (var i = 0; i < arr.length; i++) {
				var img = $('<a class="swiper-slide"><img/></a>');
				img.find('img').attr('src',arr[i].img);
				$('.swiper-wrapper').append(img);
			}
			var mySwiper = new Swiper ('.swiper-container', {

				autoplay: 5000,//可选选项，自动滑动

			    loop: true,
			    
			    // 如果需要分页器
			    pagination: '.swiper-pagination'
			}) 
		})
		
		       
	}
});