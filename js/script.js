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
