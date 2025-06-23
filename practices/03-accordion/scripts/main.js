// //하나씩 반복해서 만드는 코드
// {
//   const accordionContainer = document.querySelector(".accordion__container");
//   const accordions = accordionContainer.querySelectorAll(".accordion");

//   const firstAccordion = accordions.item(0);
//   const firstAccordionButton = firstAccordion.querySelector("button");
//   firstAccordionButton.addEventListener("click", () => {
//     if (!firstAccordion.classList.contains("is-open")) {
//       firstAccordion.classList.add("is-open");
//     } else {
//       firstAccordion.classList.remove("is-open");
//     }
//   });

//   const secondAccordion = accordions.item(1);
//   const secondAccordionButton = secondAccordion.querySelector("button");
//   secondAccordionButton.addEventListener("click", () => {
//     if (!secondAccordion.classList.contains("is-open")) {
//       secondAccordion.classList.add("is-open");
//     } else {
//       secondAccordion.classList.remove("is-open");
//     }
//   });
//   const thirdAccordion = accordions.item(2);
//   const thirdAccordionButton = thirdAccordion.querySelector("button");
//   thirdAccordionButton.addEventListener("click", () => {
//     if (!thirdAccordion.classList.contains("is-open")) {
//       thirdAccordion.classList.add("is-open");
//     } else {
//       thirdAccordion.classList.remove("is-open");
//     }
//   });
//   const fourthAccordion = accordions.item(3);
//   const fourthAccordionButton = fourthAccordion.querySelector("button");
//   fourthAccordionButton.addEventListener("click", () => {
//     if (!fourthAccordion.classList.contains("is-open")) {
//       fourthAccordion.classList.add("is-open");
//     } else {
//       fourthAccordion.classList.remove("is-open");
//     }
//   });
// }

//반복문을 이용해서 만드는 코드
{
  const accordionContainer = document.querySelector(".accordion__container");
  const accordions = accordionContainer.querySelectorAll(".accordion");

  for (let i = 0; i < accordions.length; i++) {
    const accordion = accordions.item(i);
    const accordionButton = accordion.querySelector("button");
    accordionButton.addEventListener("click", () => {
      if (!accordion.classList.contains("is-open")) {
        accordion.classList.add("is-open");
      } else {
        accordion.classList.remove("is-open");
      }
    });
  }
}
