const button = document.querySelector(".button");
console.log(button);
// button.addEventListener("click", (e) => {
//   console.log("버튼 클릭!");
// });

let condition = true; // 조건을 true로 설정
if (condition) {
  console.log("참입니다!");
} else {
  console.log("거짓입니다!");
}

let link;

link = document.querySelector(".link");
console.log(link);

button.addEventListener("click", () => {
  console.log("버튼 클릭!");
});
