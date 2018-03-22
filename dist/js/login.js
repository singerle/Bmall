$(function() {
	$(".click-login").click(function() {
		var username = $("input")[1].value;
		var password = $("input")[2].value;
		ajax("login.php?username=" + username + "&password=" + password, "", "", foo);
	});

	function foo(data) {
		if(data === "1") {
			alert("登录成功");
			$(".user_name")[0].innerHTML = $("input")[1].value;
			$(".login").eq(0).remove();
			$("#login").css("display", "none");
			$(".discover").css("display", "none");

		} else {
			alert("用户名或密码错误，请重新登录");
		}
	}

	$(".login").click(function() {
		$("#login").css("display", "block");
		$(".discover").css("display", "block");
	})

	$(".close-login").click(function() {
		$("#login").css("display", "none");
		$(".discover").css("display", "none")
	})
})