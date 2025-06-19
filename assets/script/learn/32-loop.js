// // --------------------------------------------------------------------------Add commentMore actions
// // 📌 루프(Loop)
// // --------------------------------------------------------------------------

// // let count = 0

// const draw = () => {
//   // count = count + 1
//   console.count("도화지에 그림을 그린 횟수");
// };

// let wantToDraw = true;

// // 조건문
// // 조건이 참이면 블록 내부의 코드 한 번 수행
// if (wantToDraw) {
//   console.log("if문");
//   draw();
// }

// // 루프(반복)문
// // 조건이 참이면 블록 내부의 코드를 조건이 거짓이 될 때까지 반복 수행
// // 특정 상황(조건) 설정
// let i = 10;

// while (wantToDraw) {
//   console.log("while문");
//   draw();

//   // 특정 상황이 일치되는 경우
//   if (i <= 0) {
//     // 조건을 참에서 거짓으로 변경
//     wantToDraw = false;
//     console.log("i =", i, "wantToDraw =", wantToDraw);
//   } else {
//     i = i - 1; // 10 - 1 -> 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
//     console.log("i =", i);
//   }
// }

// //사용자 입력 검증 (while문 활용)
// //"1부터 10까지의 숫자를 입력하세요."

//do...while 문을 사용하여 사용자 입력을 검증할 수 있습니다.
let userInput = 0;
do {
  userInput = parseInt(prompt("1부터 10까지의 숫자를 입력하세요."), 10);
  console.error("잘못된 입력입니다. 다시 입력해주세요.");
} while (Number.isNaN(userInput) || userInput < 1 || userInput > 10);

console.log("사용자 입력:", userInput);
// let userInput = parseInt(prompt("1부터 10까지의 숫자를 입력하세요."));
// while (Number.isNaN(userInput) || userInput < 1 || userInput > 10) {
//   // 사용자 입력이 숫자가 아니거나, 1보다 작거나, 10보다 큰 경우
//   userInput = parseInt(prompt("1부터 10까지의 숫자를 입력하세요."), 10);
//   if (Number.isNaN(userInput) || userInput < 1 || userInput > 10) {
//     console.error("잘못된 입력입니다. 다시 입력해주세요.");
//   }
// }

// console.log("사용자 입력:", userInput);

//흐름 제어문 (continue, break 등)
function draw(n) {
  console.log(n + "번 드로잉합니다.");
}

// let i = 0;

// while (i < 20) {
//   i = i + 1;

//   // [특정 상황] 흐름 제어
//   // i 값이 6 ~ 14인 동안, draw(i) 건너띄어 이어가기
//   if (i > 5 && i < 15) {
//     continue;
//   }

//   draw(i);
// }

function draw(n) {
  console.log(n + "번 드로잉합니다.");
}

let i = 0;

while (i < 20) {
  i = i + 1;

  // [특정 상황] 흐름 제어
  // i 값이 15일 때 반복문 종료하기
  if (i === 15) {
    break;
  }

  draw(i);
}

//do while 문 (조건이 거짓이여도 블록 내부의 코드를 최소 한 번 수행)

let j = 0;
do {
  j = j + 1;
  console.log("j =", j);
} while (j < 5); // j가 5보다 작을 때까지 반복
console.log("최종 j =", j); // j = 5
// do while 문은 최소 한 번은 실행되므로, j가 0일 때도 블록 내부의 코드가 실행됩니다.
// do while 문은 조건이 거짓이더라도 블록 내부의 코드를 최소 한 번 수행합니다.
// 따라서, j가 5보다 작을 때까지 반복하지만, j가 5일 때도 블록 내부의 코드를 실행합니다.
// 최종적으로 j는 5가 됩니다.

// 함수이름참조()
// 즉시 실행 함수 (IIFE: Immediately Invoked Function Expression)
// 즉시 실행 함수는 정의와 동시에 실행되는 함수입니다.
// 주로 변수의 범위를 제한하거나 초기화 작업을 수행할 때 사용됩니다.
// 즉시 실행 함수는 함수 선언 후 바로 실행되므로, 코드가 깔끔하게 유지됩니다.
// 즉시 실행 함수는 전역 변수 오염을 방지하는 데 유용합니다.
// 실행하고 바로 사라지는 함수.

(function () {
  console.log("나를 보세요");
});

(function scope1() {
  var 변수 = "지역 변수 1";
  console.log(변수);
});

(function scope2() {
  var 변수 = "지역 변수 2";
  console.log(변수);
});

(function scope3() {
  var 변수 = "지역 변수 3";
  console.log(변수);
});

(function scope4() {
  var 변수 = "지역 변수 4";
  console.log(변수);
})();

// for문 (반복문)
for (let i = 0; i < 5; i++) {
  console.log("i =", i);
}
// for문은 초기화, 조건, 증감식을 포함하여 반복을 제어합니다.
// 초기화: 반복문이 시작될 때 한 번 실행되는 코드입니다.
// 조건: 반복문이 계속 실행될 조건을 정의합니다.
// 증감식: 반복문이 한 번 실행된 후 실행되는 코드로, 반복 변수의 값을 변경합니다.
// for문은 주로 반복 횟수가 정해져 있을 때 사용됩니다.

//for문을 사용해 과일바구니 내부의 과일 이름을 출력해보세요.
const fruitBasket = ["체리망고", "토마토", "스트로베리"];
for (let i = 0; i < fruitBasket.length; i++) {
  console.log("과일 이름:", fruitBasket[i]);
}

const students = [
  { 이름: "홍민영" },
  { 이름: "윤정화" },
  { 이름: "허시온" },
  { 이름: "조선현" },
  { 이름: "성정현" },
  { 이름: "조장원" },
];
// for문을 사용해 학생들의 이름을 출력해보세요.
for (let i = 0; i < students.length; i++) {
  console.log("학생 이름:", students[i].이름);
}

//역순으로 출력
for (let i = students.length - 1; i >= 0; i--) {
  console.log("역순 학생 이름:", students[i].이름);
}
