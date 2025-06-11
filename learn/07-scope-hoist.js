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

function logger(logmessage) {
  console.log("로그메세지", logmessage);
}

logger("실습을 통한 연습은 언제나 옳습니다");

// px 값을 rem 단위로 변환하는 함수 (기본 1rem = 16px)
function pxToRem(px) {
  const baseSize = 16; // 기본 폰트 사이즈 (보통 브라우저 기본값)
  const rem = px / baseSize;
  return rem + "rem";
}

// 테스트 - 이미지에 나온 결과와 동일하게 나와야 함
console.log(pxToRem(24)); // '1.5rem'
console.log(pxToRem(16)); // '1rem'

function remtopx(rem) {
  let px = rem * 16;
  return px + "px";
}

console.log(remtopx(1.5));
console.log(remtopx(1));
