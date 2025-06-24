(() => {
  const headline = document.querySelector("h1");
  //속성이름은 카멜케이스로 작성
  //web APIs
  //CSSStyleDeclaration {} 읽기
  // console.log(headline.style);

  //CSSStyleDeclaration {} 쓰기
  //CSS 속성값 단위 포함
  headline.style.fontSize = "32px";

  //이벤트 리스너
  //마우스엔터
  headline.addEventListener("mouseenter", () => {
    headline.style.color = "red";
  });

  //마우스리브
  headline.addEventListener("mouseleave", () => {
    headline.style.color = "black";
  });
})();
