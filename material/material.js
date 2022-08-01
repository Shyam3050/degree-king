// for querySelector
const getElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) return element;
    throw Error(`please check the class names, there is no ${selector}`);
  };
  // for querySelectorAll
  const getAllElement = (selector) => {
    const element = document.querySelectorAll(selector);
    if (element) return element;
    throw Error(
      `All-Selector Say! please check the class names, there is no ${selector}`
    );
  };
  const loader_wrapper = getElement(".loader-wrapper");
  const links = getElement(".nav-links");
  const nav_btn = getElement(".nav-toggle-btn");
  const nav_link = getAllElement(".nav-link");
  // for nav links
  nav_link.forEach((check) => {
    check.addEventListener("click", () => {
      links.classList.toggle("show-links");
      nav_btn.classList.toggle("active");
    });
  });
  // for nav-btn
  nav_btn.addEventListener("click", () => {
    links.classList.toggle("show-links");
    nav_btn.classList.toggle("active");
  });  
  // after load window
  
  window.addEventListener("load", () => {
    loader_wrapper.remove();
  });
  