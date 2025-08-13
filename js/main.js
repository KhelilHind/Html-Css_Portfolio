document.querySelector(".switcher-btn").onclick = () => {
  document.querySelector(".color-switcher").classList.toggle("active");
};
let themButtons = document.querySelectorAll(".theme-buttons");

themButtons.forEach((color) => {
  color.addEventListener("click", () => {
    let dataColor = color.getAttribute("data-color");
    document
      .querySelector(":root")
      .style.setProperty("--main-color", dataColor);
    localStorage.setItem("selectedColor", dataColor);
  });
});

const savedColor = localStorage.getItem("selectedColor");
if (savedColor) {
  document.querySelector(":root").style.setProperty("--main-color", savedColor);
}
