const JS_학습_주제 = [
  "변수",
  "함수",
  "조건문",
  "객체",
  "배열",
  "비교 연산자",
  "부정 연산자",
];

// 배열 항목 위치(index) 찾기(find)
let 함수_인덱스, 비교_연산자_인덱스;

함수_인덱스 = JS_학습_주제.indexOf("함수"); // 기대값: 1 / 결과값: ?
console.log("함수_인덱스 =", 함수_인덱스);
함수_인덱스 = JS_학습_주제.indexOf("함 수"); // 기대값: -1 / 결과값: ?
console.log("함수_인덱스 =", 함수_인덱스);

비교_연산자_인덱스 = JS_학습_주제.indexOf("비교");
console.log("비교_연산자_인덱스 =", 비교_연산자_인덱스); // 기대값: -1 / 결과값: -1

비교_연산자_인덱스 = JS_학습_주제.indexOf("비교연산자");
console.log("비교_연산자_인덱스 =", 비교_연산자_인덱스); // 기대값: -1 / 결과값: -1

비교_연산자_인덱스 = JS_학습_주제.indexOf("비교 연산자");
console.log("비교_연산자_인덱스 =", 비교_연산자_인덱스); // 기대값: 5 / 결과값: 5

// indexOf 메서드가 반환한 값이 -1이거나, 또는 -1보다 크면 그 값은 true다.
const fruitBasket = ["패션후르츠", "애플망고", "워터멜론", "오렌지"];
console.log(fruitBasket.indexOf("패션") > -1); // 기대값: -1 / 결과값: -1
console.log(fruitBasket.indexOf("패션후르츠") > -1); // 기대값: 0 / 결과값: 0
console.log(fruitBasket.indexOf("애플망고") > -1); // 기대값: 1 / 결과값: 1
console.log(fruitBasket.indexOf("워터멜론") > -1); // 기대값: 2 / 결과값: 2

// 구문이 긴데? 재사용 가능한 함수로 작성해볼까요?
function hasItem(array, item) {
  return array.indexOf(item) > -1;
}

console.log(hasItem(fruitBasket, "패션")); // 반환값: false
console.log(hasItem(fruitBasket, "오렌지")); // 반환값: true

//indexOf 메서드 대신 includes 메서드 사용하기
console.log(fruitBasket.includes("패션")); // 기대값: false / 결과값: false
console.log(fruitBasket.includes("오렌지")); // 기대값: true / 결과값: true
// includes 메서드는 indexOf 메서드와 달리 -1을 반환하지 않고 true 또는 false를 반환한다.
// includes 메서드는 배열에 특정 항목이 있는지 여부를 확인할 때 더 직관적이고 가독성이 좋다.
// includes 메서드는 문자열에서도 사용할 수 있다.

//배열에 항목 추가하기
//1. 시작부분에 항목 추가하기
const numbers = [2, 3, 4];
numbers.unshift(1); // 1을 배열의 시작 부분에 추가
console.log(numbers); // 기대값: [1, 2, 3, 4] / 결과값: [1, 2, 3, 4]

numbers.unshift(-1, 0);
console.log(numbers); // 기대값: [-1, 0, 1, 2, 3, 4] / 결과값: [-1, 0, 1, 2, 3, 4]

// 2. 끝부분에 항목 추가하기
numbers.push(7, 8); // 7과 8을 배열의 끝 부분에 추가
console.log(numbers); // 기대값: [-1, 0, 1, 2, 3, 4, 7, 8] / 결과값: [-1, 0, 1, 2, 3, 4, 7, 8]

//3. 시작부분에 항목 제거하기
numbers.shift(); // 배열의 시작 부분에서 항목 제거
console.log(numbers); // 기대값: [0, 1, 2, 3, 4, 7, 8] / 결과값: [0, 1, 2, 3, 4, 7, 8]

// 4. 끝부분에 항목 제거하기
numbers.pop(); // 배열의 끝 부분에서 항목 제거
console.log(numbers); // 기대값: [0, 1, 2, 3, 4, 7] / 결과값: [0, 1, 2, 3, 4, 7]

//const deletedItems = array.splice(startIndex, deleteCount, itemsToAdd)
//5. 배열의 중간 부분에 항목 추가하기
numbers.splice(5, 0, 5, 6); // 5와 6을 배열의 중간 부분에 추가
console.log(numbers); // 기대값: [0, 1, 2, 3, 4, 5, 6, 7] / 결과값: [0, 1, 2, 3, 4, 5, 6, 7]

//6. 배열의 중간 부분에서 항목 제거하기
numbers.splice(2, 2); // 인덱스 2에서 2개의 항목 제거
console.log(numbers); // 기대값: [0, 1, 5, 6, 7] / 결과값: [0, 1, 5, 6, 7]

{
  const numbers = [9, 10, 3, 4, 7, 8];
  // 추가 및 제거 방법을 사용해 아래 결과를 만들어 보세요.
  // [1, 2, 3, 4, 5, 6]
  numbers.shift(); // 시작 부분에서 9 제거
  numbers.shift(); // 시작 부분에서 10 제거
  numbers.pop(); // 끝 부분에서 8 제거
  numbers.pop(); // 끝 부분에서 7 제거
  numbers.unshift(1, 2); // 시작 부분에 1과 2 추가
  numbers.push(5, 6); // 끝 부분에 5와 6 추가
  console.log(numbers); // 기대값: [1, 2, 3, 4, 5, 6] / 결과값: [1, 2, 3, 4, 5, 6]
}

//7. 배열의 중간 부분에서 항목 추가 및 제거하기
const numbers2 = [9, 10, 3, 4, 7, 8];
numbers2.splice(0, 2, 1, 2); // 인덱스 0에서 2개의 항목 제거하고 1과 2 추가
numbers2.splice(4, 2, 5, 6); // 인덱스 4에서 2개의 항목 제거하고 5와 6 추가
console.log(numbers2); // 기대값: [1, 2, 3, 4, 5, 6] / 결과값: [1, 2, 3, 4, 5, 6]

//8. 배열 복사
const numbers3 = [9, 10, 3, 4, 7, 8];
const numbersCopy = numbers3.slice(); // 배열 복사
console.log(numbersCopy); // 기대값: [9, 10, 3, 4, 7, 8] / 결과값: [9, 10, 3, 4, 7, 8]

const people = ["세종대왕", "이순신", "김구", "유관순", "장영실", "신사임당"];
// 1. people 배열에서 '이순신' 항목의 인덱스를 확인합니다.
const 이순신_인덱스 = people.indexOf("이순신");
console.log("이순신_인덱스 =", 이순신_인덱스); // 기대값: 1 / 결과값: 1
//2. people 배열 시작 위치에 '정약용', '지석영'을 추가합니다.
// 1. `unshift()` 활용
// people.unshift("정약용", "지석영");
// 2. `splice()` 활용
// people.splice(0, 0, "정약용", "지석영");
// console.log(people); // 기대값: ['정약용', '지석영', '세종대왕', '이순신', '김구', '유관순', '장영실', '신사임당'] / 결과값: ['정약용', '지석영', '세종대왕', '이순신', '김구', '유관순', '장영실', '신사임당']
// 3. people 배열 끝 위치에 '김유신', '을지문덕'을 추가합니다.
// 1. `push()` 활용
// people.push("김유신", "을지문덕");
// 2. `splice()` 활용
// people.splice(people.length, 0, "김유신", "을지문덕");
// console.log(people); // 기대값: ['정약용', '지석영', '세종대왕', '이순신', '김구', '유관순', '장영실', '신사임당', '김유신', '을지문덕'] / 결과값: ['정약용', '지석영', '세종대왕', '이순신', '김구', '유관순', '장영실', '신사임당', '김유신', '을지문덕']
// 4. people 배열 시작 위치에서 '세종대왕', '이순신'을 제거합니다.
// 1. `shift()` 활용
// people.shift(); // '세종대왕' 제거
// people.shift(); // '이순신' 제거
// 2. `splice()` 활용
// people.splice(0, 2); // 인덱스 0에서 2개의 항목 제거
// console.log(people); // 기대값: ['김구', '유관순', '장영실', '신사임당', '김유신', '을지문덕'] / 결과값: ['김구', '유관순', '장영실', '신사임당', '김유신', '을지문덕']
// 5. people 배열 끝 위치에서 '장영실', '신사임당'을 제거합니다.
// 1. `pop()` 활용
// people.pop(); // '장영실' 제거
// people.pop(); // '신사임당' 제거
// console.log(people); // 기대값: ['김구', '유관순', '김유신', '을지문덕'] / 결과값: ['김구', '유관순', '김유신', '을지문덕']
// 2. `splice()` 활용
// people.splice(people.length - 2, 2);
// console.log(people);
//6.people을 복제한 새로운 배열 생성, people에서 '이순신','김구'로 구성된 새로운 집합을 생성
const peopleCopy = people.slice(1, 3); // people 배열 복제, 3인 이유는 3 전까지만 복제! end는 미포함
console.log(peopleCopy); // 기대값: ['이순신', '김구'] / 결과값: ['이순신', '김구']
