//-------------------------------
//📌 Dom에서 요소 제거
//--------------------------------------

// removeChild() 메서드
() => {
  // 요소를 제거할 부모 요소를 선택합니다.
  const memberList = document.querySelector(".members");
  // 제거할 요소를 선택합니다.
  const memberToRemove = memberList.children[1]; // 두 번째 자식 요소를 선택합니다.
  // removeChild() 메서드를 사용하여 요소를 제거합니다.
  memberList.removeChild(memberToRemove);
};

// remove() 메서드
(() => {
  // 요소를 제거할 부모 요소를 선택합니다.
  const memberList = document.querySelector(".members");
  // 제거할 요소를 선택합니다.
  const memberToRemove = memberList.children[1]; // 두 번째 자식 요소를 선택합니다.
  // remove() 메서드를 사용하여 요소를 제거합니다.
  memberToRemove.remove();
})();
