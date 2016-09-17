define(['text!./compoent/muse/muse.html','css!./compoent/muse/muse.css','zepto',"touch"],function(content){
	function setMuse(){
		$('.main').html(content);
		setMuse_data();
		choice_data();
	}
	function setMuse_data(){
		$('.footer').show();
		$.ajax({
			url: 'http://duif.applinzi.com/leyuan/leyuan_data.php?address=全城',
			type: 'get',
			dataType: 'json',
			success:function(res){
				setData(res.data);
				rand(res.data);
			}
		});	
		function setData(arr){
			$('.muse-main1 ul').empty();
			for (var i = 0; i < arr.length; i++) {
				var li = $('<li><div><p></p><p></p></div><div><p class="iconfont .dingwei"></p><p></p></div><img/></li>');
				li.css('backgroundImage','url('+arr[i].img+')');
				li.find('div').eq(0).find('p').eq(0).text(arr[i].name);
				li.find('div').eq(0).find('p').eq(1).text(arr[i].address);
				li.find('div').eq(1).find('p').eq(0).html('&#xe600;');
				li.find('div').eq(1).find('p').eq(1).text(arr[i].dist+'公里');
				li.find('img').attr('src','../../img/icon.png');
				$('.muse-main1 ul').append(li);
			}
		};
		function rand(arr){
			$('.muse-nav-option').eq(2).find('li').eq(1).on('tap',function(){
			distance = $(this).text();
				console.log(distance);
				rand_data(arr,distance);
			});
			function rand_data(arr){
				var str = JSON.stringify(arr);
				var arr1 = JSON.parse(str);
				arr1.sort(function(a,b){
					return a.dist-b.dist;
				});
				console.log(arr1);
				$('.muse-main1 ul').empty();
				for (var i = 0; i < arr1.length; i++) {
					var li = $('<li><div><p></p><p></p></div><div><p class="iconfont .dingwei"></p><p></p></div><img/></li>');
					li.css('backgroundImage','url('+arr1[i].img+')');
					li.find('div').eq(0).find('p').eq(0).text(arr1[i].name);
					li.find('div').eq(0).find('p').eq(1).text(arr1[i].address);
					li.find('div').eq(1).find('p').eq(0).html('&#xe600;');
					li.find('div').eq(1).find('p').eq(1).text(arr1[i].dist+'公里');
					li.find('img').attr('src','../../img/icon.png');
					$('.muse-main1 ul').append(li);
				}
			}
		}
		$('.muse-nav-choice-tag').on('tap',function(){
			$('.muse-nav-sort').hide(1);
			$(this).siblings().toggle();
			$(".muse-nav-choice-tag").css('border','none');
			$(this).css({'borderWidth':'0.1rem','borderBottomColor':'red','borderBottomStyle':'solid'});
		});
		$('.muse-nav-sort').on('tap',function(){
			$('.muse-nav-choice-tag').siblings().hide();
			$(this).hide();
		})
		$('.muse-nav-option').on('tap',function(e){
			// $('.muse-nav-choice-tag').siblings().hide();
			event.stopPropagation();
		})
	}
	function choice_data(){
		var add = '';
		$('.muse-nav-option').eq(1).find('li').on('tap',function(){
			add = $(this).text();
			console.log(add);
			set_city(add);
		});
		function set_city(add){
			$.ajax({
				url: 'http://duif.applinzi.com/leyuan/leyuan_data.php?address='+add,
				type: 'get',
				dataType: 'json',
				success:function(res){
					setData(res.data);
				}
			});
			function setData(arr){

				$('.muse-main1 ul').empty();
				
				if(!arr){
					$('.muse-main1 ul').html('<p class="muse-end">您搜索的店铺不存在</p>');
				}else{
					for (var i = 0; i < arr.length; i++) {
						var li = $('<li><div><p></p><p></p></div><div><p class="iconfont .dingwei"></p><p></p></div><img/></li>');
						li.css('backgroundImage','url('+arr[i].img+')');
						li.find('div').eq(0).find('p').eq(0).text(arr[i].name);
						li.find('div').eq(0).find('p').eq(1).text(arr[i].address);
						li.find('div').eq(1).find('p').eq(0).html('&#xe600;');
						li.find('div').eq(1).find('p').eq(1).text(arr[i].dist+'公里');
						li.find('img').attr('src','../../img/icon.png');
						$('.muse-main1 ul').append(li);
					};
				}
				
			};
		};

	}
	return{
		setMuse:setMuse
	}

})