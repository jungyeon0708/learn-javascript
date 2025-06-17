// --------------------------------------------------------------------------Add commentMore actions
// 📌 DOM (문서 객체 모델)
// - 문서 요소 선택(접근)하는 함수들 (Web APIs)
// --------------------------------------------------------------------------

// Document.getElementsByTagName(tagName)
// console.log(document.getElementsByTagName('li'))

// Document.getElementById(idName)
// let emailInput = document.getElementById('useremail') // 데이터 타입 객체
// console.log(emailInput)

// Document.getElementsByName(name)
// console.log(document.getElementsByName('email'))

// Document.getElementsByClassName(className)
// const items = document.getElementsByClassName('item')
// console.log(items)

// const elementById = document.querySelector("#useremail");
// // console.log(elementById)

// const elementByName = document.querySelector('[name="email"]');
// // console.log(elementByName)

// const firstElementByClassName = document.querySelector(".item");
// // console.log(firstElementByClassName)

// const elementByTagName = document.querySelector("h1");
// console.log(elementByTagName);

//1. id 속성으로 DOM 요소를 선택하여 콘솔 패널에 출력해봅니다.
const exorcist = document.querySelector("#exorcist-characters");
console.log(exorcist);
//2. id 속성으로 선택한 DOM 요소에서 다음을 수행하세요.
//1. 태그 또는 클래스 이름, 속성 이름/값 등을 사용해 "박요한"을 선택해보세요.
const yohan = document.querySelector(".character.yo-han");
console.log(yohan);
//2. 태그 또는 클래스 이름, 속성 이름/값 등을 사용해 "최강림"을 선택해보세요.
const kangrim = document.querySelector(".character.master-choi");
console.log(kangrim);
//3. 태그 또는 클래스 이름, 속성 이름/값 등을 사용해 "악령"을 선택해보세요.
const ghost = document.querySelector(".character.villain-ghost");
console.log(ghost);
