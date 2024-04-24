// 왜 중첩을 해야하는가?
// 비동기 작업 => 순서보장X
// 비동기 작업의 동기적 표현이 필요하다. 

// Promise, Generator(ES6), async/await(ES7)
// Promise는 비동기 처리에 대해 처리가 끝나면 알려달라는 약속이다
// new 연산자로 호출한 Promise의 인자로 넘어가는 콜백은 바로 실행된다.
// 그 내부의 resolve(또는 reject) 함수를 호출하는 구문이 있을 경우 
// resolve(또는 reject) 둘 중 하나가 실행되기 전까지는 다음(then), 오류(catch)로 넘어가지 않는다.
// 비동기작업이 완료될 때 resolve, reject 호출한다.

new Promise(function (resolve) {
	setTimeout(function () {
		var name = '에스프레소';
		console.log(name);
		resolve(name);
	}, 500);
}).then(function (prevName) {
	return new Promise(function (resolve) {
		setTimeout(function () {
			var name = prevName + ', 아메리카노';
			console.log(name);
			resolve(name);
		}, 500);
	});
}).then(function (prevName) {
	return new Promise(function (resolve) {
		setTimeout(function () {
			var name = prevName + ', 카페모카';
			console.log(name);
			resolve(name);
		}, 500);
	});
}).then(function (prevName) {
	return new Promise(function (resolve) {
		setTimeout(function () {
			var name = prevName + ', 카페라떼';
			console.log(name);
			resolve(name);
		}, 500);
	});
});