// -----------------------------------------------------
// 스코프(Scope)
// - 코드 영역(범위)
// - 전역(전체 영역: global scope)
// - 지역(일부 영역: local scope)
//
// 호이스트(Hoist)
// - 무엇을 끌어올리나?
// - [ 함수 선언 ]을 [ 코드 작성 영역의 가장 상단 ]으로 끌어올린다.
// -----------------------------------------------------

// 호이스트(Function Hoist)Add commentMore actions
// - 사람들이 현상(벌어진 일)만 보고 그 느낌을 표현한 말에 불과
//
// - 컴퓨터 (JavaScript 엔진 관점) :
//   코드 스캔 후, 함수 선언을 먼저 메모리에 등록한다.
//   그리고 코드를 처리한다.
//
// - 인간 (개발자 관점) :
//   "작성된 순서대로 코드가 실행될 것이다."

// 선언된 함수는 코드를 작성하는 영역의
// 가장 상위로 끌어올려진 것처럼 작동된다.
함수();

// 함수 선언(Function Declaration)
// 컴퓨터 메모리에 함수가 기억된다.
function 함수() {
  console.log("함수가 실행되었어요!");
}

// 함수 실행
// 컴퓨터 메모리에 기억된 함수 이름을 통해 코드를 실행한다.

// var 변수선언;
console.log(1, 마이네임);
var 마이네임 = "정연";

console.log(2, 마이네임);

//let 변수 호이스트 현상 (일어나지않음!!)
// console.log(1, 마이네임);
// let 마이네임 = "정연";

// console.log(2, 마이네임);

//const 변수 호이스트 현상 (일어나지않음!!)
// console.log(1, 마이네임);
// const 마이네임 = "정연";

// console.log(2, 마이네임);

// 함수를 만드는 2가지 방법      Add commentMore actions
// --------------------------------------------------------------------------
// 1. 함수 선언 (Function Declaration)
// 2. 함수 표현식 (Function Expression)
// --------------------------------------------------------------------------

// 변수 선언

// 함수 선언
function look(who) {
  console.log(who + "를(을) 보다");
}
// 함수 선언, 함수 표현식 그리고 호이스트 현상 비교

// 보다('공무원님')
// look('선생님')

// var 보다 // [ undefined ]
// console.log(보다) // undefined

// 보다('형사님') // undefined() ❌

// 함수 (표현)식
// 자바스크립트는 함수를 값(value)으로 취급
// let 변수 = 값 (할당)
// let 보다 = 'see' // string
// let 보다 = 1001 // number
// let 보다 = true // boolean
// let 변수 = 함수
let 보다 = function (누구) {
  console.log(누구 + "를(을) 보다");
};

// 함수 작성법은 2개 비교
// 1. 함수 선언 (function 키워드로 시작, 호이스트 현상 ✅)
// 2. 함수 표현식 (변수에 함수 값을 할당, JS는 함수를 값으로 취급 / 호이스트 현상 ❌)

// let myFunction = function () {
//   console.log('this is a mine function name')
// }

// myFunction()

function logger(logMessage) {
  console.log("로그 메시지: ", logMessage);
}

logger("실습을 통한 연습은 언제나 옳습니다. ☺️");

/* -------------------------------------------------------------------------- */
/* PxToRem 함수                                                                 */
/* -------------------------------------------------------------------------- */

// 16px / 16px = 1rem
// 32px / 16px = 2rem
// 189px / 16px = ?rem

function pxToRem(px) {
  // let rem = px / 16 + 'rem'
  // return rem
  return px / 16 + "rem";
}

function remToPx(rem) {
  // let px = rem * 16 + 'px'
  // return px
  return rem * 16 + "px";
}

function pizzaTotal(price, count) {
  return price * count;
}

console.log(pizzaTotal(18000, 4));

//주차요금계산
const 주차요금계산 = function (주차시간) {
  return 주차시간 * 1000 + "원";
};

console.log(주차요금계산(1.5));

// 짝수인지 확인하는 함수
function isEven(number) {
  return number % 2 === 0;
}

// 테스트
console.log(isEven(4)); // true (짝수)
console.log(isEven(5)); // false (홀수)
console.log(isEven(10)); // true (짝수)
console.log(isEven(7)); // false (홀수)
console.log(isEven(0)); // true (0은 짝수)
console.log(isEven(1)); // false (홀수)

// 자동 축하 메시지 생성기
function makeCongratulationMessage(name) {
  return "축하합니다, " + name + "님! 🎉 오늘도 화이팅하세요!";
}

// 테스트
console.log(makeCongratulationMessage("철수"));
console.log(makeCongratulationMessage("영희"));
console.log(makeCongratulationMessage("민수"));

//올해 남은 날짜 계산 함수
function 올해남은날짜계산(현재날짜의일수) {
  return 365 - 현재날짜의일수;
}

//세금 포함 가격 계산 함수 만들기
function addVAT(price) {
  return price * 1.1; // 원가격 × 1.1 = 부가세 포함 가격
}

console.log(addVAT(10000)); // 11000
console.log(addVAT(25000)); // 27500

// 성인 구역 입장 가능한지 확인하는 함수 (19세 이상)
function canEnterAdultZone(age) {
  return age >= 19;
}

// 테스트
console.log(canEnterAdultZone(20)); // true (입장 가능)
console.log(canEnterAdultZone(19)); // true (입장 가능)
console.log(canEnterAdultZone(18)); // false (입장 불가)
console.log(canEnterAdultZone(17)); // false (입장 불가)
console.log(canEnterAdultZone(25)); // true (입장 가능)
