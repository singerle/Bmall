/*
 ajax参数说明
 * url:必填，请求的接口地址
 * type：必填，请求类型 get和post
 * data:必填，json格式，无需向服务器传递数据时，用{}
 * fnSuc:必填，成功时的回调函数
 * fnFail：选填，失败时回调函数
 * */
function ajax(url,type,data,fnSuc,fnFail){
	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	var str = "";
	for(var i in data){
		str += i+"="+data[i]+"&";
	}
	str = str.replace(/&$/,"");
	
	if(type.toLowerCase()=="get"){
		if(str===""){
			xhr.open("GET",url,true);
		}else{
			xhr.open("GET",url+"?"+str,true);
		}
		xhr.send();
	}else{
		xhr.open("POST",url,true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(str);
	}
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				var data = xhr.responseText;
				fnSuc(data);
			}else{
				if(fnFail){
					fnFail();
				}
				
			}
		}
	}
	
}

