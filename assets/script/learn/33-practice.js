//1. for 문을 사용해 `1`부터 `100`까지의 숫자 중, 짝수만 출력
const evenNumbers = [];
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    evenNumbers.push(i);
  }
}
console.log("짝수:", evenNumbers);

//2. while 문을 사용해 숫자 `10`부터 `1`까지 역순으로 출력
const reverseNumbers = [];
let j = 10;
while (j >= 1) {
  reverseNumbers.push(j);
  j--;
}
console.log("역순:", reverseNumbers);

//3.for … of 문을 사용해 다음 배열의 과일 출력
const fruits = ["사과", "바나나", "귤", "복숭아"];
for (const fruit of fruits) {
  console.log("과일:", fruit);
}

//4.do … while 문을 사용해 입력된 비밀번호('3001') 매칭 검토 후 결과 출력
let i = 0,
  input;
const attempts = ["0124", "8291", "3001", "9073"];

do {
  input = attempts[i];
  if (input === "3001") {
    console.log("비밀번호가 일치합니다.");
    break;
  }
  i++;
} while (i < attempts.length);

//5.for … in 문을 사용해 객체의 key, value 출력
const student = {
  name: "선호",
  grade: "A",
  age: 22,
};

for (const key in student) {
  const value = student[key];
  console.log(key, value);
}

//6. `1`부터 `20`까지 반복
const numbers = [];
for (let k = 1; k <= 20; k++) {
  numbers.push(k);
}
console.log("1부터 20까지의 숫자:", numbers);
// 1. `5`부터 `10`까지는 건너띄고 나머지 출력
// 2. `17`이 되면 반복 종료
for (const number of numbers) {
  if (number >= 5 && number <= 10) {
    continue; // 5부터 10까지는 건너뜀
  }
  if (number === 17) {
    break; // 17이 되면 반복 종료
  }
  console.log("출력:", number);
}
