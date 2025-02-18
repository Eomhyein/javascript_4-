// refactoring


// 화살표 함수 사용하기
// var addCoffee = (name) => {
var addCoffee = function (name) {
	return function (prevName) {
        // 이 안에서도 새롭게 Promise를 만든다.
		return new Promise(function (resolve) {
			setTimeout(function () {
                // 백틱
                var newName = prevName ? `${prevName}, ${name}` : name;
				//var newName = prevName ? (prevName + ', ' + name) : name;
				console.log(newName);
				resolve(newName);
			}, 500);
		});
	};
};

addCoffee('에스프레소')()
	.then(addCoffee('아메리카노'))
	.then(addCoffee('카페모카'))
	.then(addCoffee('카페라떼'));
