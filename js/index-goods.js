$(function(){
	$(".menu").children().hover(function(e){
		$(".menu").children().css("background","#20252a");
		$(".goods").children().css("display","none");
		$(e.target).css("background","#353a40");
		$(".goods").children().eq($(e.target).index()).css("display","block");
	})	
})
