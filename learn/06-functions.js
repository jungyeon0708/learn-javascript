console.log("함수(function)");
//함수란? - 특정 순서에 따라 작업이 실행되는 코드 묶음(블록)

//1. 냄비 꺼내기
//2. 물 넣기
//3. 물 끓이기
//4. 스프넣기
//5. 다진마늘 한숟갈 넣기
//6. 면 넣기
//7. 끓여지면 불 끄기

//함수 선언 (function declaration) 구문
function drawwater() {
  console.groupCollapsed("물길러가자!!");
  console.log("1. 양동이챙기기");
  console.log("2. 양동이 들고 우물로 이동하기");
  console.log("3. 우물에서 물 길어오기");
  console.log("4. 집으로 귀가하기");
  console.groupEnd();
}

//함수사용(call function)
drawwater();
drawwater();

// 동사형태Add commentMore actions
// 함수를 "호출(실행)한다" 의미 - 약속된 규칙
// 함수기능()

// 함수 이름으로 기능을 유추해보세요.
// 직관적이고 쉬운 함수 이름이 잘 지어진 이름입니다!!!
// playMusic()
// stopMusic()
// pauseMusic()

// 적절하지 않은 함수 이름
// function return() {}
// function 2break() {}
// function conti    nue() {}
// function cla-----ss() {}
// function for() {}
//------------------------
//전역변수
// let year = 4026;
// //이 안에 있는건 안에서만 작동하기 때문에 지역변수!!
// function 일기쓰기() {
//   let year = 2026;
//   let month = 6;
//   let day = 10;
//   console.log(year + "년" + month + "월" + day + "일에 일기를 쓴다.");
// }

// 일기쓰기();
// 일기쓰기();
// 일기쓰기();

//----------------------------
//매개변수
// 함수 선언
function writeDiary(year, month, day, location) {
  // let location = '롯데 타워'

  console.log(
    year +
      "년 " +
      month +
      "월 " +
      day +
      "일에 " +
      location +
      "에 다녀온 일기를 쓴다."
  );
}

// 함수 호출(실행)
// 일기쓰기(연도, 월, 일, 장소)
writeDiary(2025, 6, 10, "서울 N 타워");
writeDiary(2025, 7, 1, "부산 광안리 해수욕장");
writeDiary(2025, 10, 30, "원주 디자인 뮤지엄");

let day = "11일";
console.log(day);

function 더하기(숫자1, 숫자2) {
  console.log("콘솔패널에 출력된 계산 결과 = ", 숫자1 + 숫자2);
  return 숫자1 + 숫자2;
}
let 결과값 = 더하기(10, 9);
console.log("결과값 = ", 결과값);

function 곱하기(숫자1, 숫자2) {
  let 결과값 = 숫자1 * 숫자2; // 계산된 값
  // console.log(결과값)
  return 결과값;
}

function 화면에결과그리기() {
  const 화면에그릴숫자값 = 곱하기(10, 20); // undefined
  document.write(화면에그릴숫자값); // undefined -> 'undefined'
}

화면에결과그리기();
