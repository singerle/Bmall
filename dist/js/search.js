
(function(){
	{
		"search":function(oTxt,){
			var oList = document.getElementById("list");
			
			oTxt.oninput = function(){
				var val = this.value;
				oScript.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+val+"&json=1&cb=foo";
				document.body.appendChild(oScript);
				document.body.removeChild(oScript);
			}
				function foo(data){
					data = data.s;
					var str = "";
					data.forEach(function(item){
						str += "<li><a href='https://www.baidu.com/s?wd="+item+"'>"+item+"</a></li>";
					})
					oList.innerHTML = str;
				}
		}
	}
})()

