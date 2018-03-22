$(function() {
	$.getJSON("../json/content.json", function(data) {
		if(getCookie("cart")) {
			var obj = JSON.parse(getCookie("cart"));
		} else {
			var obj = {};
		}
		var str = "";
		for(var id in obj) {
			for(var i in data) {
				if(id == data[i].id) {
					str += "<li><span>" + data[i].name + "</span><b>-</b><img src='"+data[i].src+"'><b>+</b><span>" + obj[id] + "</span><span>￥"+data[i].price+"</span><div>小计："+(obj[id]*data[i].price)+"元</div></li>";
				}
			}
		}
		console.log($(".shop-show"))
		$(".shop-show")[0].innerHTML = str;
	})
})