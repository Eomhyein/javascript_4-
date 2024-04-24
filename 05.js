// this
// 제어권을 넘겨받을 코드에서 콜백 함수에 별도로 this가 될 대상을 지정한 경우에는 그 대상을 참조한다.


// Array.prototype.map을 직접 구현해봤어요!
Array.prototype.mapaaa = function (callback, thisArg) {
    var mappedArr = [];

    for (var i = 0; i < this.length; i++) {
        // call의 첫 번째 인자는 thisArg가 존재하는 경우는 그 객체, 없으면 전역객체
        // call의 두 번째 인자는 this가 배열일 것(호출의 주체가 배열)이므로,
        // i번째 요소를 넣어서 인자로 전달
        var mappedValue = callback.call(thisArg || global, this[i]);
        mappedArr[i] = mappedValue;
    }
    return mappedArr;
};

const a = [1, 2, 3].mapaaa((item) => {
    return item * 2;
});

console.log(a);