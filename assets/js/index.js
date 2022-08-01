const html = document.querySelector("html");
let toggle = document.querySelector("#toggle");

const getStyle = (element, style) =>
  window.getComputedStyle(element).getPropertyValue(style);

const initalColors = {
  whiteBg: getStyle(html, "--white-bg"),
  lightGrayishBlueCardBg: getStyle(html, "--light-grayish-blue-card-bg"),
  veryDarkBlueText: getStyle(html, "--very-dark-blue-text"),
  darkGrayishBlueText: getStyle(html, "--dark-grayish-blue-text"),
  lightGrayishBlueCardBgHover: getStyle(
    html,
    "--light-grayish-blue-card-bg-hover"
  ),
};

const darkMode = {
  whiteBg: getStyle(html, "--very-dark-blue-bg"),
  lightGrayishBlueCardBg: getStyle(html, "--dark-desaturated-blue-card-bg"),
  veryDarkBlueText: getStyle(html, "--white-text"),
  darkGrayishBlueText: "hsl(0, 0%, 100%)",
  lightGrayishBlueCardBgHover: getStyle(
    html,
    "--dark-desaturated-blue-card-bg-hover"
  ),
};

const transformKey = (key) =>
  "--" + key.replace(/([A-Z])/g, "-$1").toLowerCase();

const changeColors = (colors) => {
  console.log(colors);

  Object.keys(colors).map((key) =>
    html.style.setProperty(transformKey(key), colors[key])
  );
};

toggle.addEventListener("change", ({ target }) => {
  target.checked ? changeColors(darkMode) : changeColors(initalColors);
});

// let toggle = document.querySelector("#toggle");
// let card = document.querySelectorAll(".card");
// let textHeader = document.querySelector(".header__h1");
// let textHeader2 = document.querySelector(".overview__h2");

// toggle.addEventListener("click", () => {
//   document.body.classList.toggle("dark-mode");

//   bgCard();
//   colorText();
// });

// function bgCard() {
//   card.forEach((card) => {
//     card.classList.toggle("card-dark-mode");
//   });
// }

// function colorText() {
//   textHeader.classList.toggle("text-dark-mode");
//   textHeader2.classList.toggle("text-dark-mode");
// }
