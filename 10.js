setTimeout(
    function (name) {
        var coffeeList = name;
        console.log(coffeeList);

        setTimeout(
            function (name) {
                coffeeList += ", " + name;
                console.log(coffeeList);

                setTimeout(
                    function (name) {
                        coffeeList += ", " + name;
                        console.log(coffeeList);

                        setTimeout(
                            function (name) {
                                coffeeList += ", " + name;
                                console.log(coffeeList);
                            },
                            500,
                            "카페라떼"
                        );
                    },
                    500,
                    "카페모카"
                );
            },
            500,
            "아메리카노"
        );
    },
    500,
    "에스프레소"
);

// 들여쓰기가 많음. 값 전달 순서는 아래에서 위! 해결하기 위해서는 11.js 파일