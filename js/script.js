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
  <div class="subject active" data-id = ${id}>
    <div class="sub-cross">
      <span class="cross one"></span>
      <span class="cross two"></span>
    </div>
    <ul>
      <li class="sem-subjects" data-subject = "maths">
      <a href="#sem" class="subEvt" data-subject = "maths">Maths</a></li>
      <li class="sem-subjects" data-subject = "computers">
        <a href="#sem" class="subEvt">Computer</a>
      </li>
      <li class="sem-subjects" data-subject = "physics">
        <a href="#sem" class="subEvt">physics</a>
      </li>
      <li class="sem-subjects" data-subject = "chemistry">
        <a href="#sem" class="subEvt"
          >Chemistry</a
        >
      </li>
      <li class="sem-subjects" data-subject = "skills">
        <a href="#sem" class="subEvt"
          >Skills & Others</a
        >
      </li>
      <li class="sem-subjects" data-subject = "english">
        <a href="#sem" class="subEvt" >English</a>
      </li>
      <li class="sem-subjects" data-subject = "telugu">
        <a href="#sem" class="subEvt">Telugu</a>
      </li>
      <li class="sem-subjects" data-subject = "oriya">
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

const semSubjects = getAllElement(".sem-subjects");
const ans_modal = document.getElementById("ans_modal");
// ans_modal_main_content rendering
let ans_modal_main_content = document.getElementById("ans_modal_main_content");

for (let i = 0; i < semSubjects.length; i++) {
  semSubjects[i].addEventListener("click", (e) => {
    const crossElement = e.currentTarget.parentElement.parentElement;
    const subjectName = e.currentTarget.dataset.subject;
    ans_modal.classList.toggle("hidden");
    crossElement.classList.toggle("active");
    const id = crossElement.dataset.id;
    const item = DATA.find((element) => element.id === id);
    if (item[subjectName]) {
      ans_modal_main_content.innerHTML = item[subjectName]
        .map((ques) => {
          const { title, link } = ques;
          return `<p class = "ans-pdfs">${title}  <a href=${link} target = "_blank">Download</a></p>`;
        })
        .join("");
    } else {
      ans_modal_main_content.innerHTML = `<p class = 'ans-pdfs'> Not Found</p>
      <p class = 'ans-pdfs'> Comeing Soon......</p>
      <p> For updates join Whatsapp group </p>`;
    }
  });
}

// render updates_pdf marque
const updates_pdf_data = [
  "2nd sem Physics imp question list Added check it out",
  "2nd sem Solar Energy imp question list added check it",
  "2nd Computers imp question list",
  "2nd SEM ODIAY NOTES AND pdf model papers UPDATED checkit out",
  "4th_sem_Modern_physics_questions added check it out",
  "2022 2nd sem Examination paper added check it Out",
  "2nd sem Solar Energy Q: Write about pyro heliometer and it's working",
  '2nd sem solar Energy 2022 Exam Paper updated check it',
  "2nd sem Dairy technology 2022 Exam paper updated check it",
  "1sem 2022 June Exam Papers UPdated"
];
const updates_pdf = document.getElementById("updates_pdf");
updates_pdf.innerHTML = updates_pdf_data
  .map((item) => `<li>${item}</li>`)
  .join("");
