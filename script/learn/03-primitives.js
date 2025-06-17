//기본(원시, primitives) 타입(유형)
// string(문자열),number(숫자), boolean(참 또는 거짓), null, undefined, symbol, bigint(아주 큰 정수)

//----------------------
//string
"작은 따옴표로 묶인 텍스트 데이터";
"큰 따옴표로 묶인 문자 값";
// \ 이스케이프 처리
console.log("나의 100m 달리기 최고 기록은 12'26\"이야.");
// 문자열 연결 '+' 사용
"나의 100m 달리기" + " " + "최고 기록은 12'26\"이야.";
//데이터값이 숫자인경우
// 1 + 1 = 2;
//데이터값이 문자인경우
// '1' + '1' = 11;

//------------------------
//number
console.log(1_000_000_000);
console.log(100 + 399);
console.log(1000 * 344);
console.log(102 / 23);
//숫자(정수)
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

//--------------------------
//boolean

true; // boolean
("true"); //string

//-----------------------------
//undefined

console.log(undefined);

//-----------------------------
//null

null;
console.log(null);

//------------------------------
//symbol (꼭 대문자로 작성)
console.log(Symbol());
console.log(Symbol(2025));
console.log(Symbol("고유식별자"));

//-------------------------------
//bigint (number에서 정의한 min,max 수보다 더 큰 정수를 다룸)
console.log(BigInt(Number.MAX_SAFE_INTEGER + 10));
