document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab__content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // 모든 탭과 콘텐츠에서 is-selected 제거
      tabs.forEach((t) => t.classList.remove("is-selected"));
      tabContents.forEach((content) => content.classList.remove("is-selected"));

      // 클릭한 탭에 is-selected 추가
      tab.classList.add("is-selected");

      // 해당하는 콘텐츠에 is-selected 추가
      const theme = tab.getAttribute("data-theme");
      const targetContent = document.querySelector(
        `.tab__content[data-theme="${theme}"]`
      );
      if (targetContent) {
        targetContent.classList.add("is-selected");
      }
    });
  });
});
