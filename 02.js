var count = 0;

// timer : 콜백 내부에서 사용할 수 있는 '어떤 게 돌고있는지'
// 알려주는 id값
var timer = setInterval(function() {
	console.log(count);
	if(++count > 4) clearInterval(timer);
}, 300);