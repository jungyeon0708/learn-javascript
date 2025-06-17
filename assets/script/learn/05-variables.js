//변수(variables)
console.log("변수(variables)");
console.log(4 + 27);

//변수 선언 및 값 할당
let 처음_가진_사과의_갯수 = 4;
console.log("처음_가진_사과의_갯수 = ", 처음_가진_사과의_갯수);

let 추가로_구매한_사과의_갯수 = 27;
console.log("추가로_구매한_사과의_갯수 = ", 추가로_구매한_사과의_갯수);

let 현재_내가_가진_사과의_갯수 =
  처음_가진_사과의_갯수 + 추가로_구매한_사과의_갯수;
console.log("현재_내가_가진_사과의_갯수 =", 현재_내가_가진_사과의_갯수);

let initialapples = 4;
console.log("initialapples =", initialapples);

//오류이름 예시
// 1. 숫자로 시작하는 것(중간에 있는건 괜찮)
// 2. 스페이스가 존재하는 것(연결된 한 단어)
// 3. 에약어 사용불가

//let 변수 vs var 변수
{
  var myName;
  console.log(1, myName);

  myName = "yamoo9";
  console.log(2, myName);
}

myName = "y9";
console.log(3, myName);

{
  let myName2;
  console.log(1, myName2);

  myName2 = "yamoo9";
  console.log(2, myName2);
}

myName2 = "y9";
console.log(3, myName2);

//let vs const
// let은 추후 수정가능,(재할당가능) const는 재할당 불가능

// 1. `const` 키워드를 사용해 값이 변하지 않는 상수를 선언해봅니다.
//     1. "하루는 24시간"
const hours_in_a_day = 24;
console.log("hours_in_a_day = ", hours_in_a_day);
//     2. "물의 어는 점은 섭씨 0도"
const freezing_point = 0;
console.log("freezing_point = ", freezing_point);
//     3. "삼각형 내각의 합은 180도"
const triangle = 180;
console.log("triangle = ", triangle);
//     4. "지구의 중력 가속도는 9.8 m/s²"
const earth = " 9.8 m/s";
console.log("earth = ", earth);
// 2. 다음 내용을 코드로 작성해 결과 값을 콘솔 패널에 출력해보세요.
//     1. `let` 키워드를 사용해 `sum` 변수를 선언하고 값을 `0`으로 설정합니다.
let sum = 0;
console.log(sum);
//     2. `num1`, `num2` 변수를 선언하고, 각각 `300`, `50`으로 값을 설정합니다.
let num1 = 300;
let num2 = 50;
//     3. `num1`, `num2`의 합을 `sum` 변수에 할당합니다.
sum = num1 + num2;
console.log("sum = ", sum);
// 3. 사람 이름, 나이, 오늘의 기온, 장바구니 상품 갯수, 집 주소, 현재 시간,로그인 상태, 피자 가격, 학생 수 등에 걸맞는 변수 이름을 정하고 적절한 값을 설정합니다.
let name = "정연";
let age = 30;
let todaytemperature = "26.5도";
console.log("todaytemperature = ", todaytemperature);
let cart = 10;
let adress = "incheon";
let time = "2:30";
let pizza = 18900;
let student = 43;
