$(function(){
	$.getJSON("../json/content.json",function(data){
		//console.log(data);
		var str = "<ul>";
		for(var i = 0;i < data.length;i++){
			str += "<li><a><img src='"+data[i].src+"'/><p class='goods-name'>"+data[i].name+"</p><p class='goods-price'>商城价： ¥"+data[i].price+"<input type='button' class='add' value='加入购物车' data-id='"+data[i].id+"'></p></a></li>";		
		}
		str += "</ul>";
		$(".category")[0].innerHTML = str;
		
		
		
		if(getCookie("cart")) {
			var obj = JSON.parse(getCookie("cart"));
		} else {
			var obj = {};
		}
		//改变购物篮中的数量
		var num = 0;
		for(var attr in obj) {
			num += obj[attr];
		}
		$(".cart-count")[0].innerText = num;
		var aBtns = document.getElementsByClassName("add");
		console.log(aBtns.length);
		for(var i = 0; i < aBtns.length; i++) {
			aBtns[i].onclick = function() {
				console.log("aa")
				var proId = this.getAttribute("data-id");
				if(obj[proId] === undefined) {
					obj[proId] = 1;
				} else {
					obj[proId]++;
				}
				//改变购物篮中的数量
				var num = 0;
				for(var attr in obj) {
					num += obj[attr];
				}
				$(".cart-count")[0].innerText = num;
				//将对象转换成字符串
				var objToStr = JSON.stringify(obj);
				setCookie("cart", objToStr, 7);
			}
		}
	})
})
