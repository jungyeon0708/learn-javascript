const clickable_button = document.querySelector(".clickable");
const body = document.body;

clickable_button.addEventListener("click", () => {
  body.classList.toggle("is-active");
  clickable_button.classList.toggle("is-active");
  // clickable_button.addEventListener("click", () => {
  //   // 조건 확인 ('is-active' 클래스 이름을 가지는가?)
  //   if (body.classList.contains("is-active")) {
  //     // 클래스 이름 제거 -----------------------------------
  //     // body 요소에 is-active 클래스 이름 제거
  //     body.classList.remove("is-active");
  //     // .clickable_button 요소에 is-active 클래스 이름 제거
  //     clickable_button.classList.remove("is-active");
  //   } else {
  //     // 클래스 이름 추가 -----------------------------------
  //     // body 요소에 is-active 클래스 이름 추가
  //     body.classList.add("is-active");
  //     // .clickable_button 요소에 is-active 클래스 이름 추가
  //     clickable_button.classList.add("is-active");
  //   }
});

const button = document.querySelector("button");

function alertLog(e) {
  console.log("clicked button");
  button.classList.toggle("clicked");

  // 명시적 반환
  // return { name: '나는 반환값이다.' }
  return () => {
    console.log("나는 함수가 반환한 함수이다!");
  };

  // 암묵적으로 반환
  // return undefined
}

// alertLog
const result = alertLog();
console.log(result); // undefined

// 함수 이름만 참조
// button.addEventListener('click', alertLog)

// 함수 이름으로 호출(실행)
// 이벤트 연결 (binding events)
button.addEventListener("click", alertLog());
