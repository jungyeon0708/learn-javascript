// querySelectorAll() 메서드를 사용해 연습해보세요.
const starWars = document.querySelector("#star-wars");
// 1. 좋은 사람(Good Guy)을 모두 선택하세요.
const goodGuys = starWars.querySelectorAll("[data-type='good-guy']");
console.log(goodGuys);
// 2. 좋은 사람(Good Guy) 모두에게 `excellent` 클래스 이름을 추가하세요.
goodGuys.forEach((item) => {
  item.classList.add("excellent");
});
console.log("좋은 사람(Good Guy) =", goodGuys);
// 3. 빌런(Villain)을 모두 선택하세요.
const villains = starWars.querySelectorAll("[data-type='villain']");
console.log(villains);
// 4. 빌런 모두에게 `naughty` 클래스 이름을 추가하세요.
villains.forEach((item) => {
  item.classList.add("naughty");
});
console.log("빌런(Villain) =", villains);
// 5. 모든 캐릭터(Character)를 선택하세요.
const allCharacters = starWars.querySelectorAll(".character");
// 6. 모든 캐릭터에 `star-wars` 클래스 이름을 추가하세요.
allCharacters.forEach((item) => {
  item.classList.add("star-wars");
});
console.log("모든 캐릭터(Character) =", allCharacters);
