// getStyle(element, propertyName): propertyValue
//요소, CSS 속성 이름(문자 값)을 전달하면 CSS 스타일 값을 반환하는 함수를 작성하세요.
function getStyle(element, propertyName, pseudoElement) {
  const elementStyles = getComputedStyle(element, pseudoElement);
  const propertyValue = elementStyles.getPropertyValue(propertyName);
  return propertyValue;
}

// --------------------------------------------------------------------------
// setStyle(element, propertyName, propertyValue): element
function setStyle(element, propertyName, propertyValue) {
  // 요소에 스타일 적용(쓰기)
  element.style.setProperty(propertyName, propertyValue);
  return element;
}

// --------------------------------------------------------------------------
// css(element, propertyName, ?propertyValue): element
function css(element, propertyName, propertyValue) {
  // [스타일 쓰기] 속성 값이 전달되었을 때
  if (propertyValue) {
    // 스타일 쓰기
    const styledElement = setStyle(element, propertyName, propertyValue);
    return styledElement;
  }
  // [스타일 읽기] 속성 값이 전달되지 않았을 때
  else {
    // 스타일 읽기
  }
}
