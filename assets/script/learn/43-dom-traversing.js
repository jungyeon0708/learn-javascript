// // dom 탐색
// // DOM 탐색은 HTML 문서의 구조를 이해하고, 요소를 찾고, 조작하는 데 사용됩니다.
// {
//   const starWars = document.getElementById("star-wars");
//   console.log(starWars);

//   //querySelectorAll을 사용하여 요소 찾기
//   const characters = starWars.querySelectorAll(".character");
//   console.log(characters);

//   //children 속성을 사용하여 자식 요소 찾기
//   const children = starWars.children;
//   // children은 HTMLCollection을 반환합니다.
//   //배열화
//   const childrenArray = Array.from(children);
//   console.log(childrenArray);

//   //firstChild와 lastChild를 사용하여 첫 번째 및 마지막 자식 요소 찾기
//   const firstChild = starWars.firstChild;
//   const lastChild = starWars.lastChild;
//   console.log(firstChild, lastChild);

//   //firstElementChild와 lastElementChild를 사용하여 첫 번째 및 마지막 자식 요소 찾기
//   const firstElementChild = starWars.firstElementChild;
//   const lastElementChild = starWars.lastElementChild;
//   console.log(firstElementChild, lastElementChild);

//   //parentElement를 사용하여 부모 요소 찾기
//   //parentElement는 현재 요소의 부모 요소를 반환합니다.
// 위로 탐색!!!
//   const parent = firstElementChild.parentElement;
//   console.log(parent);
// }

{
  //옆방향으로 dom 탐색
  const faqList = document.querySelector(".faq-list");
  const firstItem = faqList.firstElementChild;
  const lastItem = faqList.lastElementChild;
  console.log(firstItem, lastItem);

  //closest를 사용하여 특정 요소 찾기
  //closest는 현재 요소에서 시작하여 상위 요소를 찾습니다.
  const faqItem = firstItem.closest(".faq-item");
  console.log(faqItem);
}
