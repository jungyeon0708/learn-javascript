// 기본 타입(Primitive Types, 간단)
// 1. String - '문자값'
// 2. Number - 101
// 3. Boolean - false
// 4. null - 비어있다.
// 5. undefined - 정의되지않음
// 6. Symbol - Symbol('yamoo9')
// 7. BigInt - 1000n

// 객체 타입(Object Types, 복잡)
// 1. Function - () => {}
// 2. Object - {}
// 3. Array - []

//객체 정의
//객체 리터럴을 사용해 객체 정의(쉬운 방법)
const 커피 = {
  용량: "600ml",
  브랜드: "스타벅스",
  이름: "아메리카노",
};

//객체 생성자를 사용해 객체 생성

// const 커피 = new Object();
// (커피.이름 = "아메리카노"),
//   (커피.브랜드 = "스타벅스"),
//   (커피.용량 = "600ml"),

console.log(커피);

const 국어사전 = {
  결제: "대금을 주고받아 매매 당사자 사이의 거래 관계를 끝맺는 일",
  결재: "결정할 권한이 있는 상관이 부하가 제출한 안건을 검토하여 허가하거나 승인",
};

console.log(국어사전);

const macbookPro = {
  processor: "2.4 GHz 8코어 Intel Core i9",
  memory: "64GB 2667 DDR4",
  macOS: "Sequoia 15.4",
};

console.log(macbookPro);

const 객체 = {
  숫자: 101,
  문자: "안녕!",
  불리언: false,
  널: null,
  언디파인드: undefined,
  심볼: Symbol("객체"),
  빅인트: 910n,
  배열: [],
  객체: {},
  함수: () => {},
};

const h1Camel = {
  fontWeight: 200,
  fontSize: "2.65rem",
};

// 객체 생성 (리터럴 방법: 쉽다!)
const h1Kebab = {
  "font-weight": 200,
  "font-size": "2.65rem",
};

// 객체 속성 읽기(Read)
console.log(h1Kebab["font-weight"]); // 200

// 객체 속성 쓰기(Write)
h1Kebab["font-weight"] = 700; // bold
h1Kebab["font-style"] = "oblique";

// 수정된 객체 속성 읽기(Read)
console.log(h1Kebab["font-weight"]); // 700
console.log(h1Kebab["font-style"]); // 'oblique'

console.log(h1Kebab);

// 객체 속성 삭제(Delete)
delete h1Kebab["font-style"];

console.log(h1Kebab);
// 객체의 속성(Object's Properties)Add commentMore actions
// h1Camel.fontSize
// h1Camel.fontWeight

// 객체의 메서드(Object's Methods : 객체의 속성 중 함수(동사)형태의 것을 특별히 메서드라고 부른다.)
h1Camel.getFontSize = function () {
  return h1Camel.fontSize;
};

console.log(h1Camel.getFontSize());

macbookPro.getOS = function () {
  return macbookPro.macOS;
};

console.log(macbookPro.getOS());
console.log(macbookPro["getOS"]());

// 메서드 정의 (매개변수 포함)
macbookPro.playMusic = function (songTitle) {
  return '"' + songTitle + '" 재생을 시작합니다. 🎵';
};

// 메서드 사용 (함수처럼 호출, 객체를 통해 메서드에 접근)
console.log(macbookPro.playMusic("첫 눈처럼 너에게 가겠다."));

greeting(sayHello, "🌈 자바스크립트");

function sayHello() {
  return "안녕! ";
}
function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
