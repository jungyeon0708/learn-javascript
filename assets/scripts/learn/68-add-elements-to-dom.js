//📌dom에 '여러요소' 추가!!
// dom에 여러요소를 추가하는것은 비용이 많이드는 작업.
// 따라서, dom에 여러요소를 추가할 때는 한번에 추가하는것이 좋거나, 가능하다면 적게 사용하는 것이 좋다.
// 여러 요소를 추가할 때 랜더링 횟수가 증가되면 성능에 영향을 줄 수 있다.
//---------------------------------------------------------------------

() => {
  const recipeList = [
    "면이 익으면 불을 끄고 그릇에 옮깁니다.",
    "물을 냄비에 붓고 끓입니다 (약 500ml)",
    "물이 끓으면 스프를 먼저 넣습니다.",
    "취향에 따라 파, 계란, 치즈 등을 추가합니다.",
    "호호 불며 맛있게 먹습니다.",
  ];

  const listElement = document.querySelector(".ramen-cooking-recipe");
  for (const recipe of recipeList) {
    const listItem = document.createElement("li");
    listItem.textContent = recipe;
    listElement.appendChild(listItem);
  }
};

//---------------------------------------------------------------------
// 요소(Element) 객체의 유용한 메서드
const list = document.querySelector(".ramen-cooking-recipe");

(() => {
  // prepend()
  // prepend() 메서드는 부모요소의 첫번째 자식 요소로 삽입
  const elements = [
    createElement("li", "물을 냄비에 붓고 끓입니다 (약 500ml)"),
    createElement("li", "물이 끓으면 스프를 먼저 넣습니다."),
    createElement("li", "면이 익으면 불을 끄고 그릇에 옮깁니다."),
  ];
  list.prepend(...elements);
})();
// append()
// append() 메서드는 부모요소의 마지막 자식 요소로 삽입
(() => {
  const elements = [
    createElement("li", "취향에 따라 파, 계란, 치즈 등을 추가합니다."),
    createElement("li", "호호 불며 맛있게 먹습니다."),
  ];
  list.append(...elements);
})();

// before()
// before() 메서드는 요소앞에 다른 요소(들) 삽입
(() => {
  const beforeElement = createElement(
    "li",
    "라면을 끓이기 전에 물을 준비합니다."
  ); //삽입할 새 요소
  const firstElement = list.firstElementChild; // 첫번째 자식 요소
  firstElement.before(beforeElement); //첫번째 자식요소 앞에 삽입
})();

// after()
// after() 메서드는 요소 뒤에 다른 요소(들) 삽입
(() => {
  const afterElement = createElement("li", "설거지를 합니다"); //삽입할 새 요소
  const lastElement = list.lastElementChild; // 마지막 자식 요소
  lastElement.after(afterElement); //마지막 자식요소 뒤에 삽입
})();

// insertAdjacentElement()
// insertAdjacentElement() 메서드는 요소의 특정 위치에 다른 요소 삽입
(() => {
  const adjacentElement = createElement(
    "li",
    "끓여지는 동안 김치를 준비합니다."
  );
  const referenceElement = list.children[2]; // 세번째 자식 요소
  referenceElement.insertAdjacentElement("beforebegin", adjacentElement); // 세번째 자식요소 앞에 삽입
})();
// insertAdjacentHTML()
// insertAdjacentHTML() 메서드는 요소의 특정 위치에 HTML 문자열 삽입
// beforebegin, afterbegin, beforeend, afterend
//<!-- beforebegin -->
/* <div>
  <!-- afterbegin -->
  기존 내용
  <!-- beforeend -->
</div>
<!-- afterend --> */

(() => {
  const htmlString = "<strong> 봉지라면 레시피</strong>";
  const h2 = document.querySelector("h2"); // h2 요소 선택
  h2.insertAdjacentHTML("afterend", htmlString); // h2 요소의 시작 부분에 HTML 문자열 삽입
})();

/**
 * DOM에 추가될 수 있는 요소 생성 함수
 * @param {string} tagName - HTML 요소 이름
 * @param {string} textContent - 요소에 포함될 내용
 * @returns {Element} 생성된 요소
 */
function createElement(tagName, textContent) {
  const element = document.createElement(tagName);
  element.textContent = textContent;
  return element;
}
//---------------------------------------------------------------------
//DocumentFragment
// DocumentFragment는 메모리 상의 가벼운 DOM 트리로, 여러 요소를 그룹화하여 DOM에 추가할 때 성능을 향상시킬 수 있습니다.
// DocumentFragment를 사용하면 여러 요소를 한 번에 추가할 수 있어,
// 렌더링 횟수를 줄이고 성능을 개선할 수 있습니다.
(() => {
  const fragment = document.createDocumentFragment(); // DocumentFragment 생성
  const elements = [
    createElement("li", "면을 끓입니다."),
    createElement("li", "스프를 넣습니다."),
    createElement("li", "재료를 추가합니다."),
  ];
  elements.forEach((el) => fragment.appendChild(el)); // DocumentFragment에 요소 추가
  list.appendChild(fragment); // DocumentFragment를 DOM 맨 뒤에 추가
})();
