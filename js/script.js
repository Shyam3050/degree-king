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
const check = document.querySelectorAll(".check");
const subject = document.querySelectorAll(".subject");
console.log(subject);
cross.forEach((cross, index) => {
  cross.addEventListener("click", () => {
    subject[index].classList.add("active");
  });
});
check.forEach((check, index) => {
  check.addEventListener("click", () =>
    subject[index].classList.toggle("active")
  );
});
