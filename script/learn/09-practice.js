// 화살표 함수로 만든 ten 함수
const ten = () => 10;

//하나의 매개변수를 받는 logger 함수를 화살표 함수 표현식으로 작성해보세요. (괄호 사용 또는 사용 안함)
const logger = (message) => "로그메세지" + message;

//pxToRem 함수를 명시적, 암묵적으로 값을 반환하도록 모든 경우를 화살표 함수 표현식으로 작성하세요.
// 1. 암묵적 반환 (implicit return) - 가장 간단
const pxToRem1 = (px) => px / 16 + "rem";

// 2. 암묵적 반환 - 괄호 있는 버전
const pxToRem2 = (px) => px / 16 + "rem";

// 3. 명시적 반환 (explicit return) - 중괄호와 return 사용
const pxToRem3 = (px) => {
  return px / 16 + "rem";
};

// 4. 명시적 반환 - 괄호 있는 버전
const pxToRem4 = (px) => {
  return px / 16 + "rem";
};

// 5. 명시적 반환 - 변수 사용해서 더 자세하게
const pxToRem5 = (px) => {
  const baseSize = 16;
  const rem = px / baseSize;
  return rem + "rem";
};

// 6. 명시적 반환 - 한 줄이지만 중괄호 사용
const pxToRem6 = (px) => {
  return px / 16 + "rem";
};

//percentage 함수를 명시적, 암묵적으로 값을 반환하도록 모든 경우를 화살표 함수 표현식으로 작성하세요.
// 1. 암묵적 반환 (implicit return) - 매개변수 2개, 괄호 없으면 안됨
const percentage1 = (part, total) => (part / total) * 100;

// 2. 암묵적 반환 - 괄호 있는 버전 (더 명확함)
const percentage2 = (part, total) => (part / total) * 100;

// 3. 암묵적 반환 - % 기호까지 포함
const percentage3 = (part, total) => (part / total) * 100 + "%";

// 4. 명시적 반환 (explicit return) - 기본 버전
const percentage4 = (part, total) => {
  return (part / total) * 100;
};

// 5. 명시적 반환 - % 기호 포함
const percentage5 = (part, total) => {
  return (part / total) * 100 + "%";
};

// 6. 명시적 반환 - 단계별 계산
const percentage6 = (part, total) => {
  const ratio = part / total;
  const percent = ratio * 100;
  return percent;
};

// 7. 명시적 반환 - 더 자세한 버전
const percentage7 = (part, total) => {
  const ratio = part / total;
  const percent = ratio * 100;
  return percent + "%";
};

// 8. 명시적 반환 - 소수점 처리
const percentage8 = (part, total) => {
  const percent = (part / total) * 100;
  return Math.round(percent * 100) / 100; // 소수점 2자리까지
};

// 9. 명시적 반환 - 한 줄이지만 중괄호 사용
const percentage9 = (part, total) => {
  return (part / total) * 100;
};
