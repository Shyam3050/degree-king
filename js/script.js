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
// cross close for semester
const cross = getAllElement(".sub-cross");
const check = getAllElement(".check");
const subject = getAllElement(".subject");
// for close the dialouge
cross.forEach((cross, index) => {
  cross.addEventListener("click", () => {
    subject[index].classList.toggle("active");
  });
});
// for open the dialouge
check.forEach((check, index) => {
  check.addEventListener("click", () =>
    subject[index].classList.toggle("active")
  );
});

// after load window

window.addEventListener("load", () => {
  loader_wrapper.remove();
});

// subject event
const subEvtObj = {
  c: null,
  m: null,
}
const subEvt = getAllElement(".subEvt");
subEvt.forEach((btn)=> btn.addEventListener("click", function(e) {
   const c = e.currentTarget.parentElement.parentElement.parentElement.parentElement;
   const m = c.querySelector(".numSem").textContent;
   subEvtObj.c = e.currentTarget.textContent;
   subEvtObj.m = m;
   console.log(subEvtObj)
   
}))
export default subEvtObj;

