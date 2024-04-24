// 제어권 2번째
// 인자에 대한 제어권을 갖는다.
// map 함수에 의해 새로운 배열을 생성해서 newArr에 담고 있다
var newArr = [10, 20, 30].map(function (currentValue, index) {
	console.log(currentValue, index);
	return currentValue + 5;
});

// 결과는?
console.log(newArr);

// -- 실행 결과 --
// 10 0
// 20 1
// 30 2
// [ 15, 25, 35 ]