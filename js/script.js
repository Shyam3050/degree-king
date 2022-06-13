const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw Error(`please check the class names, there is no ${selector}`);
};

const links = getElement(".nav-links");
const nav_btn = getElement(".nav-toggle-btn");

nav_btn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});
// cross close for semester
const cross = document.querySelectorAll(".sub-cross");
const explore = document.querySelector(".subject");
const check = getElement(".check");
// console.log(cross);
cross.forEach((cross) => {
  cross.addEventListener("click", () => {
    console.log(cross);
  });
});
// explore.classList.add("active");
check.addEventListener("click", () => {
  explore.classList.add("active");
});
