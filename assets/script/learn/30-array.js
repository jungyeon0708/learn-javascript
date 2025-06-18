//배열 만들기

const 장바구니 = ["사과", "바나나", "오렌지"];
console.log(장바구니);

const 장바구니_항목_갯수 = 장바구니.length;
console.log("장바구니_항목_갯수 = ", 장바구니_항목_갯수);

const numbers = new Array("one", "two", "three");
console.log(numbers, numbers.length);

// 대괄호에 인덱스를 전달해 배열 항목 가져오기
let firstCartItem = 장바구니[0];
let secondFromTheEndItem = 장바구니[장바구니.length - 2];
let lastCartItem = 장바구니[장바구니.length - 1];
console.log(firstCartItem, secondFromTheEndItem, lastCartItem);

// .at() 메서드에 인덱스를 전달해 배열 항목 가져오기
let firstCartItem2 = 장바구니.at(0);
let secondFromTheEndItem2 = 장바구니.at(-2);
let lastCartItem2 = 장바구니.at(-1);
console.log(firstCartItem2, secondFromTheEndItem2, lastCartItem2);

장바구니[2] = "순두부";
console.log(장바구니);

// 배열에 대해 이해할 수 있는 연습을 진행합니다.
// 빈 배열을 생성합니다.
const emptyArray = [];
// 3개의 항목을 포함하는 배열을 작성합니다.
const threeItemsArray = ["사과", "바나나", "오렌지"];
const instructors = ["야무", "슬비"];
// instructors 배열에서 "야무" 항목을 가져와 yamoo9 변수에 할당합니다.
// instructors 배열에서 "슬비" 항목 값을 "김데리사"로 변경합니다.
let yamoo9 = instructors[0];
instructors[1] = "김데리사";
console.log(instructors);
