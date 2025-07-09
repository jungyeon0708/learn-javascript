//dom에 요소노드 추가

() => {
  //요소 생성 (createElement)
  const newElement = document.createElement("div");
  //요소에 클래스 추가
  newElement.classList.add("new-element");
  //요소에 커스텀 속성 추가
  newElement.setAttribute("data-category", "value");
  //요소에 텍스트 추가
  newElement.textContent = "새로운 요소";
  //html 콘텐츠 추가
  newElement.innerHTML = "<p>새로운 내용</p>";
  document.body.appendChild(newElement);

  // <table> 요소 생성
  const tableElement = document.createElement("table");
  // 생성된 요소에 클래스 이름 설정(추가)
  tableElement.classList.add("custom-table");
  // 커스텀 속성 설정(추가)
  tableElement.setAttribute("data-type", "custom");
  // 표 제목 텍스트 콘텐츠 추가
  tableElement.textContent = "표 제목";
  // 표 제목 HTML 콘텐츠 추가(덮어쓰기)
  tableElement.innerHTML +=
    "<thead><tr><th>헤더 1</th><th>헤더 2</th></tr></thead>";
  console.log(tableElement);

  //Dom에 요소 추가
  //요소를 부모 요소의 마지막 자식으로 추가
  document.body.appendChild(tableElement);
  //요소를 부모 요소의 첫 번째 자식으로 추가
  document.body.insertBefore(newElement, document.body.firstChild);
};

//라면 레시피
const ol = document.querySelector(".ramen-cooking-recipe");
//<li> 요소를 생성한 다음에 "맛있게 먹겠습니다!" 텍스트 추가
const li = document.createElement("li");
li.textContent = "맛있게 먹겠습니다!";
// 생성한 <li> 요소를 <ol> 요소의 마지막 자식으로 추가
ol.appendChild(li);

// 특정 요소 앞에 생성된 요소 삽입
(() => {
  const ramenStep = document.querySelector(".ramen-cooking-recipe");
  const [, , targetStep] = ramenStep.children;
  // 동적으로 생성한 요소
  // <li>면을 넣고 3~4분간 끓입니다.</li>
  const newStep = document.createElement("li");
  newStep.textContent = "면을 넣고 3~4분간 끓입니다.";
  // targetStep 앞에 newStep 삽입
  ramenStep.insertBefore(newStep, targetStep);
})();

//문서에 존재하는 요소를 목표 노드앞에 추가
(() => {
  const ramenCookingRecipe = document.querySelector(".ramen-cooking-recipe");
  //삽입할 요소 찾기
  const insertRecipe = ramenCookingRecipe.firstElementChild;
  //대상 요소 찾기
  const targetRecipe = ramenCookingRecipe.lastElementChild;
  //insertRecipe를 targetRecipe 앞에 삽입
  ramenCookingRecipe.insertBefore(insertRecipe, targetRecipe);
})();

//위치변경
const button = document.querySelector("button");
const section = button.nextElementSibling;
const [list1, list2] = section.children;

button.addEventListener("click", () => {
  //좋아하는 과일 목록의 첫번째 항목을
  const firstFruit = list1.firstElementChild;
  if (!firstFruit) return; // 첫번째 항목이 없으면 함수 종료
  //좋아하지 않는 과일 목록의 마지막 항목으로 이동
  list2.appendChild(firstFruit);
});
