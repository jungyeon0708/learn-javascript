(() => {
  // 화살표 함수 표현식에서 명시적 반환 예시
  const queryAll = (selector, context = document) => {
    return context.querySelectorAll(selector);
  };

  const query = (...args) => {
    return queryAll(...args)[0];
  };

  console.log(queryAll("body *"));
  console.log(query("body *"));

  // 화살표 함수 표현식에서 암묵적 반환 예시
  const nthOfItem = (list, n) => list.at(n);
  const fisrtItem = (list) => nthOfItem(list, 0);
  const lastItem = (list) => nthOfItem(list, -1);

  const numbers = ["하나", "둘", "셋", "넷", "다섯"];

  console.log(fisrtItem(numbers));
  console.log(nthOfItem(numbers, 3));
  console.log(lastItem(numbers));
})();

// 화살표 함수 표현식: 암묵적 객체 반환
(() => {
  // 사용자 생성 함수 (명시적 객체 반환)
  const createDeveloper = ({ name, age } = {}) => {
    const developer = {
      name,
      age,
      job: "개발자",
    };
    return developer;
  };

  const park = createDeveloper({ name: "박용우", age: 21 });
  const lee = createDeveloper({ name: "이혜림", age: 34 });

  console.table(park);
  console.table(lee);

  //디자이너 생성 함수
  const createDesigner = ({ name, age } = {}) => ({
    name,
    age,
    job: "디자이너",
  });

  const kim = createDesigner({ name: "김지민", age: 28 });
  const choi = createDesigner({ name: "최수현", age: 30 });

  console.table(kim);
  console.table(choi);
})();

// 실습
// 화살표 함수와 암묵적 반환을 사용해 과일 목록을 화면에 출력합니다.
// - 과일 배열을 순환하여 `<li>` 요소로 감싼 템플릿 코드 생성하는 함수 작성
// - 반환된 결과 값을 `<ul>` 요소에 렌더링
(() => {
  const fruits = ["사과", "배", "포도"];

  const createFruitList = (fruits) => {
    return fruits.map((fruit) => `<li>${fruit}</li>`).join("");
  };

  console.log(createFruitList(fruits));

  // 화면에 과일 목록을 렌더링하는 함수
  // - fruits 배열을 순환하여 `<li>` 요소로 감싼 템플릿 코드 생성
  // - 반환된 결과 값을 `<ul>` 요소에 렌더링
  // - document.body.innerHTML에 추가
  const renderFruitList = (fruits) => {
    const fruitList = createFruitList(fruits);
    document.body.innerHTML += `<ul>${fruitList}</ul>`;
  };

  renderFruitList(fruits);
})();
