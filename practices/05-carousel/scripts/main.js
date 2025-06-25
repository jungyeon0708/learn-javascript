// - 로딩되면 이전 버튼은 처음에 감춰져야 합니다.
// - 다음 탐색 버튼을 누르면 콘텐츠가 전환되어 다음 콘텐츠가 표시됩니다.
// - 표시된 콘텐츠가 처음이 아닌 경우, 이전 버튼이 표시되어야 합니다.
// - 마지막 콘텐츠가 표시되면 다음 버튼은 감춰져야 합니다.
// - 이전 탐색 버튼을 누르면 콘텐츠가 전환되어 이전 콘텐츠가 표시됩니다.
// - 표시된 콘텐츠가 마지막이 아닌 경우, 다음 버튼이 표시되어야 합니다.
// - 처음 콘텐츠가 표시되면 이전 버튼은 감춰져야 합니다.
// - 인디케이터를 클릭하면 해당 순서의 콘텐츠가 표시되어야 합니다.
// - 표시된 콘텐츠에 따라 이전/다음 버튼이 감춰지거나 표시되어야 합니다.
// - 이전 활성 인디케이터와 클릭한 인디케이터는 활성 상태가 서로 전환되어야 합니다.

document.addEventListener("DOMContentLoaded", () => {
  const prevBtn = document.querySelectorAll(".carousel__button")[0];
  const nextBtn = document.querySelectorAll(".carousel__button")[1];
  const contents = document.querySelectorAll(".carousel__content");
  const indicators = document.querySelectorAll(".carousel__indicator");
  const contentsContainer = document.querySelector(".carousel__contents");
  const contentCount = contents.length;
  let current = 0;

  // 콘텐츠 위치 초기화
  function updateCarousel(index) {
    // 콘텐츠 이동
    contents.forEach((content, i) => {
      content.style.left = `calc(var(--width) * ${i - index})`;
    });

    // 버튼 표시/숨김
    prevBtn.style.visibility = index === 0 ? "hidden" : "visible";
    nextBtn.style.visibility =
      index === contentCount - 1 ? "hidden" : "visible";

    // 인디케이터 활성화
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle("is-selected", i === index);
    });
  }

  // 이전 버튼
  prevBtn.addEventListener("click", () => {
    if (current > 0) {
      current--;
      updateCarousel(current);
    }
  });

  // 다음 버튼
  nextBtn.addEventListener("click", () => {
    if (current < contentCount - 1) {
      current++;
      updateCarousel(current);
    }
  });

  // 인디케이터 클릭
  indicators.forEach((indicator, i) => {
    indicator.addEventListener("click", () => {
      current = i;
      updateCarousel(current);
    });
  });

  // 초기 상태
  updateCarousel(current);
});
