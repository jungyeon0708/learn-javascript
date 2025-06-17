//1.버튼에 이벤트 리스너를 추가합니다.
const body = document.querySelector("body");
const siteContainer = document.querySelector(".site-container");
const toggleOffsiteButton = siteContainer.querySelector("button");

toggleOffsiteButton.addEventListener("click", () => {
  //2.버튼이 클릭되면 화면을 오른쪽으로 밀어줍니다.
  if (!body.classList.contains("offsite-is-open")) {
    body.classList.add("offsite-is-open");
  }

  //3.버튼을 다시 클릭하면 화면을 왼쪽으로 밀어줍니다.
  else body.classList.remove("offsite-is-open");
});
