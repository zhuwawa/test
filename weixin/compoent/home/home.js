define(['text!./compoent/home/home.html','css!./compoent/home/home.css','swiper','jquery'],function(content){
	function render(){
		$('.main').html(content);
		setData();
	}
	function setData(){
		$.ajax({
			url: 'http://duif.applinzi.com/leyuan/home_data.php',
			type: 'get',
			dataType: 'json',
			success:function(res){
				console.log(res);
				setSlider(res.slider);
				setImg(res.arealist,res.reclist);
			}
		});
		function setSlider(arr){
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
		}
		function setImg(arr1,arr2){
			for (var i = 0; i < arr1.length; i++) {
				var img = $('<a class="img-ad"><img/></a>');
				img.find('img').attr('src',arr1[i].img);
				$('.home-ad').append(img);
			}
			console.log(arr2)
			for (var j = 0; j < arr2.length; j++) {
				var img1 = $('<li class="home-img-li"><a><img/></a></li>');
				img1.find('img').attr('src',arr2[i].img);
				$('.home-img ul').append(img1);
			}
		}
	}
	return{
		render:render
	}
})

