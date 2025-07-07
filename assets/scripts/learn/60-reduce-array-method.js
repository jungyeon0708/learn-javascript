(() => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  let initialValue = 0;

  // reduce() 메서드를 사용해 만든 sum() 함수
  const total = numbers.reduce(
    (
      prevValue,
      currentValue
      // currentIndex,
      // array
    ) => {
      // prevValue = 0 | 0 + 1 | 1 + 2 | 3 + 3 | 6 + 4 | ...
      // currentValue = 1 | 2 | 3 | 4 | ...
      // currentIndex = 0 | 1 | 2 | 3 | ...
      // array = numbers
      const nextValue = prevValue + currentValue;
      return nextValue;
    },
    initialValue
  );

  console.log(total);

  // for문 사용해 만든 sum() 함수
})();

// sum() 함수 만들기 : for 문 vs. reduce() 메서드
(() => {
  const numbers = [2, 4, 6, 8, 12];

  let totalForValue = sumFor(...numbers);
  console.log({ totalForValue });

  let totalReduceValue = sumReduce(...numbers);
  console.log({ totalReduceValue });

  // for문 사용해 만든 sum() 함수
  function sumFor(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) total += numbers[i];
    return total;
  }

  // reduce() 메서드를 사용해 만든 sum() 함수
  function sumReduce(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
  }
})();

//배열 -> 템플릿 스트링
(() => {
  const list = [
    { content: "하나" },
    { content: "둘" },
    { content: "셋" },
    { content: "넷" },
    { content: "다섯" },
  ];

  // 배열의 메서드를 사용해 아래와 같은 템플릿 문자열을 생성하려면?

  // '<li>하나</li><li>둘</li><li>셋</li><li>넷</li><li>다섯</li>'

  const templateString = list.reduce((acc, item) => {
    return acc + `<li>${item.content}</li>`;
  }, "");

  console.log(templateString);
})();

// 1.숫자 평균 구하기
// 다음 숫자 배열 값들의 평균을 구해 콘솔 패널에 출력하세요. (`.reduce()` 메서드 활용)

(() => {
  const scores = [85, 92, 77, 94, 88];
  const average = scores.reduce((acc, curr, index, array) => {
    acc += curr;
    if (index === array.length - 1) {
      return acc / array.length;
    }
    return acc;
  }, 0);
  console.log(average);
})();
