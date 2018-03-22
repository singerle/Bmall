$(function() {
	$.getJSON("../json/data.json", function(data) {
		var str = "<ul>";
		//获取数据
		for(var i = 0;i < data.length;i++){
			var secondMenu = data[i].content;
			str += "<li><span></span><a href='"+data[i].href+"'>"+data[i].title+"</a><ul>";
			
			for(var j = 0;j < secondMenu.length;j++){
				str += "<li><a href='"+secondMenu[j].href+"'>"+secondMenu[j].name+"</a></li>";
			}
			str += "</ul></li>";
		}
		str += "</ul>";
		$(".left-menu")[0].innerHTML = str;
		for(var k = 0; k < data.length; k++){
			$(".left-menu")
			.find("span").eq(k)
			.css("background","url(../img/Ficon.png) 0px "+(2-50*k)+"px no-repeat");
		}
//		console.log(data);//所有的数组内容
//		console.log(data[0]);//第一个大对象  居家用品
//		console.log(data[0].title);//第一个ul li a 的值 “居家用品”
//		console.log(data[0].content);//第一个 ul li ul li a 的所有对象形成的数组
//		console.log(data[0].content[0]);//数组里的第一个li a 对象
//		console.log(data[0].content[0].name);//第一个li a 对象 的值“床品”
//		console.log(data[0].content[0].href);//第一个 li a 对象的href"....."
		
	});
})