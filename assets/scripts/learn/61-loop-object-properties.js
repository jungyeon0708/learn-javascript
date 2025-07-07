//객체 속성 순환
// 객체의 속성(property)을 순환하는 방법은 여러 가지가 있습니다.
// `Object.keys()` `Object.values()` `Object.entries()` 메서드를 사용하여 객체의 속성을 순환하는 방법을 알아보겠습니다.

//object.entries() 메서드는 객체의 속성과 값을 배열로 반환합니다.
const person = {
  name: "John",
  age: 30,
  city: "New York",
};
const entries = Object.entries(person);
console.log(entries); // [['name', 'John'], ['age', 30], ['city', 'New York']]

//object.keys() 메서드는 객체의 속성 이름을 배열로 반환합니다.
const keys = Object.keys(person);
console.log(keys); // ['name', 'age', 'city']

//object.values() 메서드는 객체의 속성 값을 배열로 반환합니다.
const values = Object.values(person);
console.log(values); // ['John', 30, 'New York']

//for...in 문을 사용하여 객체의 속성을 순환할 수 있습니다.
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

//forEach() 메서드를 사용하여 객체의 속성을 순환할 수 있습니다.
Object.keys(person).forEach((key) => {
  console.log(`${key}: ${person[key]}`);
});

//for...of 문을 사용하여 객체의 속성을 순환할 수 있습니다.
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}

//실습1. 언어이름 출력
{
  const 프로그래밍_언어 = {
    자바스크립트: "JavaScript",
    파이썬: "Python",
    루비: "Ruby",
    고: "Golang",
  };

  Object.keys(프로그래밍_언어).forEach((key) => {
    console.log(key);
  });
}

//실습2. 점수의 총합계 출력
{
  const 점수 = {
    수학: 90,
    과학: 85,
    영어: 92,
    국어: 100,
  };
  let totalScore = 0;
  Object.values(점수).forEach((score) => {
    totalScore += score;
  });
  console.log(totalScore);
}

{
  // 또는 reduce() 메서드를 사용하여 총합계를 구할 수도 있습니다.
  const 점수 = {
    수학: 90,
    과학: 85,
    영어: 92,
    국어: 100,
  };
  {
    const totalScore = Object.values(점수).reduce(
      (totalScore, score) => totalScore + score,
      0
    );
    console.log(totalScore);
  }
}

// 실습 3. 객체의 키, 값 표로 출력
// 다음 객체의 키, 값을 표(table)로 템플릿 스트링으로 출력합니다.
(() => {
  const 프로필 = {
    이름: "하영",
    성별: "여성",
    나이: 26,
    거주지: "서울",
    직업: "공무원",
  };

  console.log(Object.entries(프로필));

  const tableTemplate = `
	  <table id="practice">
		<caption>프로필 정보</caption>
		<tbody>
		  ${Object.entries(프로필)
        .map(([key, value]) => {
          return `
			<tr>
			  <th scope="row">${key}</th>
			  <td>${value}</td>
			</tr>
		  `;
        })
        .join("")}
		</tbody>
	  </table>
	`;
  console.log(tableTemplate);

  // HTML에 테이블을 추가
  document.body.insertAdjacentHTML("beforeend", tableTemplate);

  // reduce() 코드 예시
  const tableTemplate1 = `
    <table id="practice">
      <caption>프로필 정보</caption>
      <tbody>
        ${Object.entries(프로필).reduce((templateString, [key, value]) => {
          const tableRowTemplate = `
              <tr>
                <th scope="row">${key}</th>
                <td>${value}</td>
              </tr>
            `;
          return `${templateString}${tableRowTemplate}`;
        }, "")}
      </tbody>
    </table>
  `;

  console.log(tableTemplate1);
})();
