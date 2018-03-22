$(function(){
	$.getJSON("../json/content.json",function(data){
		//console.log(data);
		var str = "<ul>";
		for(var i = 0;i < 8;i++){
			str += "<li><a href='"+data[i].href+"'><img src='"+data[i].src+"'/><p class='goods-name'>"+data[i].name+"</p><p class='goods-price'>商城价： ¥"+data[i].price+"</p></a></li>";		
		}
		str += "</ul>";
		$("#stage-1")[0].innerHTML = str;
		
		var str = "<ul>";
		for(var i = 5;i < 13;i++){
			str += "<li><a href='"+data[i].href+"'><img src='"+data[i].src+"'/><p class='goods-name'>"+data[i].name+"</p><p class='goods-price'>商城价： ¥"+data[i].price+"</p></a></li>";		
		}
		str += "</ul>";
		$("#stage-2")[0].innerHTML = str;
		
		var str = "<ul>";
		for(var i = 8;i < 16;i++){
			str += "<li><a href='"+data[i].href+"'><img src='"+data[i].src+"'/><p class='goods-name'>"+data[i].name+"</p><p class='goods-price'>商城价： ¥"+data[i].price+"</p></a></li>";		
		}
		str += "</ul>";
		$("#stage-3")[0].innerHTML = str;
		
		var str = "<ul>";
		for(var i = 3;i < 11;i++){
			str += "<li><a href='"+data[i].href+"'><img src='"+data[i].src+"'/><p class='goods-name'>"+data[i].name+"</p><p class='goods-price'>商城价： ¥"+data[i].price+"</p></a></li>";		
		}
		str += "</ul>";
		$("#stage-4")[0].innerHTML = str;
		
		var str = '';
		for(var i = 0;i < 4;i++){
			str += "<li><a href='"+data[i].href+"'><img src='"+data[i].src+"'/><div class='iconx hot'></div><p>"+data[i].name+"</p><p>商城价： ¥"+data[i].price+"</p></a></li>";		
		}
		$(".first")[0].innerHTML = str;
		
		var str = '';
		for(var i = 2;i < 6;i++){
			str += "<li><a href='"+data[i].href+"'><img src='"+data[i].src+"'/><div class='iconx new'></div><p>"+data[i].name+"</p><p>商城价： ¥"+data[i].price+"</p></a></li>";		
		}
		$(".second")[0].innerHTML = str;
		
		var str = '';
		for(var i = 5;i < 9;i++){
			str += "<li><a href='"+data[i].href+"'><img src='"+data[i].src+"'/><div class='iconx super'></div><p>"+data[i].name+"</p><p>商城价： ¥"+data[i].price+"</p></a></li>";		
		}
		$(".third")[0].innerHTML = str;
	})
})