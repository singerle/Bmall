var oBanner = document.getElementById("right-banner");
var scrollList = document.getElementById("scrollList");
var oFocus = document.getElementById("focus");
var aNums = oFocus.children;
var aList = scrollList.children;
var len = aList.length;
var perWidth = aList[0].offsetWidth;
scrollList.style.width = len * perWidth + "px";
var i = 0;
var timer = setInterval(function() {
	move();
}, 3000);

function move() {
	i++;
	if(i == len) {
		scrollList.style.left = 0;
		i = 1;
	}
	if(i == -1) {
		scrollList.style.left = -perWidth * (len - 1) + "px";
		i = len - 2;
	}
	for(var j = 0; j < aNums.length; j++) {
		aNums[j].className = "";
	}
	if(i == len - 1) {
		aNums[0].className = "hover";
	} else {
		aNums[i].className = "hover";
	}
	startMove(scrollList, {
		left: -perWidth * i
	});
}
for(let k = 0; k < aNums.length; k++) {
	aNums[k].onmouseover = function() {
		i = k - 1;
		move();
	}
}

oBanner.onmouseover = function() {
	clearInterval(timer);
}
oBanner.onmouseout = function() {
	timer = setInterval(function() {
		move();
	}, 3000)
}