const DATA = [
  {
    id: "jfhgbvnscs",
    sem: "1",
    sem_word: "one",
  },
  {
    id: "ioytrhndcv",
    sem: "2",
    sem_word: "two",
  },
  {
    id: "loimnbhse",
    sem: "3",
    sem_word: "three",
  },
  {
    id: "derfnhjyk",
    sem: "4",
    sem_word: "four",
  },
  {
    id: "erolkhuknc",
    sem: "5",
    sem_word: "five",
  },
  {
    id: "tyunjkiond",
    sem: "6",
    sem_word: "six",
  },
];
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

// render semester grid
const semContainer = document.getElementById("sem_container");
//
function semsRender() {
  return (semContainer.innerHTML = DATA.map((element) => {
    const { id, sem, sem_word } = element;
    return `
   <div class="sem-${sem_word}" id = ${id}>
  <div class="sem-banner">
    <h2 class="numSem">${sem}</h2>
  </div>
  <h2>sem</h2>
  <p>All maths, computer, commerce, zoology etc.</p>
  <button class="check btn">check</button>
  <div class="subject active">
    <div class="sub-cross">
      <span class="cross one"></span>
      <span class="cross two"></span>
    </div>
    <ul>
      <li class="sem-subjects"><a href="#sem" class="subEvt">Maths</a></li>
      <li class="sem-subjects">
        <a href="#sem" class="subEvt">Computer</a>
      </li>
      <li class="sem-subjects">
        <a href="#sem" class="subEvt">physics</a>
      </li>
      <li class="sem-subjects">
        <a href="#sem" class="subEvt"
          >chemistry</a
        >
      </li>
      <li class="sem-subjects">
        <a href="#sem" class="subEvt">English</a>
      </li>
      <li class="sem-subjects">
        <a href="#sem" class="subEvt">Telugu</a>
      </li>
      <li class="sem-subjects">
        <a href="#sem" class="subEvt">Oriya</a>
      </li>
    </ul>
  </div>
</div>  
  `;
  }).join(""));
}
semsRender();

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

const semSubjects = getAllElement('.sem-subjects');
const ans_modal = document.getElementById("ans_modal");
for(let i = 0; i< semSubjects.length; i++){
  semSubjects[i].addEventListener("click", (e)=>{
   const crossElement =  e.currentTarget.parentElement.parentElement;
   ans_modal.classList.toggle('hidden')
   crossElement.classList.toggle('active');
   
  })
}
