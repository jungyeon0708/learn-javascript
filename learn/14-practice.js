// 1. 빈 객체를 정의합니다.
let myObject = {};
console.log("1. 빈 객체:", myObject);

// 2. 점 표기법으로 접근할 수 있는 객체 속성을 추가하고, 속성 값을 읽어보세요.
myObject.name = "정연";

console.log("이름:", myObject.name);

// 3. 대괄호 표기법으로만 접근 가능한 객체 속성도 추가하고, 속성 값을 읽어보세요.
myObject["favorite color"] = "핑크색"; // 공백 때문에 대괄호만 가능

console.log("좋아하는 색:", myObject["favorite color"]);

// 4. 점 표기법을 사용해 객체의 속성 값을 수정하거나, 추가해봅니다.
myObject.age = 30; // 기존 속성 수정
myObject.hobby = "독서"; // 새 속성 추가
myObject.isStudent = false; // 새 속성 추가

console.log("수정된 나이:", myObject.age);
console.log("새로 추가된 취미:", myObject.hobby);
console.log("학생 여부:", myObject.isStudent);

// 5. 대괄호 표기법을 사용해 객체의 속성 값을 수정하거나, 추가해봅니다.
myObject["favorite color"] = "노란색"; // 기존 속성 수정
myObject["phone-number"] = "010-1234-5678"; // 새 속성 추가
myObject["email address"] = "chulsu@email.com"; // 새 속성 추가

console.log("수정된 좋아하는 색:", myObject["favorite color"]);
console.log("새로 추가된 전화번호:", myObject["phone-number"]);
console.log("새로 추가된 이메일:", myObject["email address"]);

// 6. 객체의 속성 타입을 함수로 설정해 메서드를 추가하고, 이 메서드를 호출해보세요.
myObject.introduce = function () {
  return "안녕하세요!";
};
console.log(myObject.introduce());

// 7. 객체의 메서드에 매개변수를 추가하고, 이 메서드를 호출해봅니다.
myObject.greet = function (greeting) {
  return greeting + "! 저는 " + this.name + "입니다.";
};

console.log(myObject.greet("안녕하세요"));

//8.객체의 속성 중 하나 삭제해보기
console.log(myObject);
delete myObject["favorite color"];
console.log(myObject);
myObject["favorite color"] = 30;
console.log(myObject);
