$(function(){
	//console.log($(".nav-aside"));
	$(".nav-aside").mouseover(function(){
		$(this).css("background-position","0px -50px");
		$(".left-menu").css("display","block");
	})
	$(".nav-aside").mouseout(function(){
		$(this).css("background-position","0px 0px");
		$(".left-menu").css("display","none");
	})
	$(".left-menu").mouseout(function(){
		$(this).css("background-position","0px 0px");
		$(".left-menu").css("display","none");
	})
})
