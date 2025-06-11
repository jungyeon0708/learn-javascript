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
