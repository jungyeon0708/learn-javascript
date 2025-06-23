(() => {
  // <nav>의 모든 <a> 요소를 찾아보자
  // NodeList 객체는 배열과 유사해보이지만, 배열 객체는 아니다.
  const navLinks = document.querySelectorAll("nav a");
  // console.log(navLinks.forEach)

  // 배열의 능력인 메서드를 모두 사용할 수 없다.
  // console.log(navLinks.findIndex)
  // console.log(navLinks.reduce)
  // console.log(navLinks.toReversed)
  // console.log(navLinks.filter)

  // 너 배열 타입이니?
  // Array.isArray(value) true or false
  console.log(Array.isArray(navLinks)); // NodeList (false)

  // const array = Array.from(likeArrayObject)
  // 유사 배열 -> 배열 변경
  const navLinksArray = Array.from(navLinks);
  console.log(Array.isArray(navLinksArray)); // Array (true)
  console.dir(navLinksArray);

  // 유사배열을 배열로 변경하면 배열의 모든 능력인 메서드를 사용할 수 있다!
  // console.log(navLinksArray.findIndex)
  // console.log(navLinksArray.reduce)
  // console.log(navLinksArray.toReversed)
  // console.log(navLinksArray.filter)
})();
const paragraphs = document.querySelectorAll("p");
// Loop (반복, 순환)
// - while
let i = 0,
  l = paragraphs.length;
while (i < l) {
  const paragraphElement = paragraphs.item(i);
  console.log(paragraphElement);
  ++i;
}

// - do...while

// - for
for (let i = 0, l = paragraphs.length; i < l; ++i) {
  const paragraphElement = paragraphs.item(i);
  console.log(paragraphElement);
}
// - for...of
for (const paragraphElement of paragraphs) {
  console.log(paragraphElement);
}

// Nodelist.forEach
paragraphs.forEach((item) => {
  console.log(item);
});

/* eslint-disable no-unused-vars */
// HTMLCollection vs. NodeList

(() => {
  console.group("DOM 업데이트 전");
  // HTMLCollection (Live)
  const paras = document.getElementsByTagName("p");
  console.log("HTMLCollection(라이브 콜렉션: 살아있는 집합) =", paras.length);

  const paraClasses = document.getElementsByClassName("para");
  console.log(
    "HTMLCollection(라이브 콜렉션: 살아있는 집합) =",
    paraClasses.length
  );

  // NodeList
  const paragraphs = document.querySelectorAll("p");
  console.log("NodeList(스태틱 콜렉션: 고정된 집합)", paragraphs.length);
  console.groupEnd();

  // Update DOM
  document.querySelector(".life-tips").innerHTML +=
    "<p>씻지 않은 채소는 그대로 보관하시는 것이 좋습니다.</p>";

  console.group("DOM 업데이트 후");
  console.log("HTMLCollection(라이브 콜렉션: 살아있는 집합) =", paras.length);
  console.log(
    "HTMLCollection(라이브 콜렉션: 살아있는 집합) =",
    paraClasses.length
  );
  console.log("NodeList(스태틱 콜렉션: 고정된 집합)", paragraphs.length);
  console.groupEnd();
})();
