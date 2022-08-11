const questionAnsList = [
  {
    sem: "1sem",
    data: [
      {
        subject: "Computer",
        ques10: ["1d Array", "2D array", "pointers explain", "block-diagram"],
        ques10Ans: ["hello goood", "jdjd"],
        ques5: ["hello goood", "jdjd"],
        ques5Ans: ["hello goood", "jdjd"],
        img: "",
        startAt: "14:32",
      },
      {
        subject: "Maths",
        ques10: ["1d Array", "2D array", "pointers explain", "block-diagram"],
        ques10Ans: ["hello goood", "jdjd"],
        ques5: ["hello goood", "jdjd"],
        ques5Ans: ["hello goood", "jdjd"],
        img: "",
        startAt: "14:32",
      },
      {
        subject: "Physics",
        ques10: ["1d Array", "2D array", "pointers explain", "block-diagram"],
        ques10Ans: ["hello goood", "jdjd"],
        ques5: ["hello goood", "jdjd"],
        ques5Ans: ["hello goood", "jdjd"],
        img: "",
        startAt: "14:32",
      },
    ],
  },
  {
    sem: "2sem",
    data: [
      {
        subject: "Computer",
        ques10: ["1d Array", "2D array", "pointers explain", "block-diagram"],
        ques10Exp: ["hello goood", "jdjd"],
        ques5: ["hello goood", "jdjd"],
        ques5Ans: ["hello goood", "jdjd"],
        img: "",
        startAt: "14:32",
      },
      {
        subject: "Maths",
        ques10: ["1d Array", "2D array", "pointers explain", "block-diagram"],
        ques10Exp: ["hello goood", "jdjd"],
        ques5: ["hello goood", "jdjd"],
        ques5Ans: ["hello goood", "jdjd"],
        img: "",
        startAt: "14:32",
      },
      {
        subject: "Physics",
        ques10: ["1d Array", "2D array", "pointers explain", "block-diagram"],
        ques10Exp: ["hello goood", "jdjd"],
        ques5: ["hello goood", "jdjd"],
        ques5Ans: ["hello goood", "jdjd"],
        img: "",
        startAt: "14:32",
      },
    ],
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

// btns
let plusBtn;
let tenFiveMarkA;
// for data fetch

const get = getElement("#get");
const questionHeader = getElement("#questionHeader");
get.addEventListener("click", () => {
  const sem = getElement("#sem").value;
  const subject = getElement("#subject").value;
  questionHeader.textContent = `${sem} sem ${subject} Questions`;
  const filteredArr = questionAnsList[sem - 1].data.filter(
    (sub) => sub.subject === subject
  );

  if (filteredArr.length === 0) {
    document.getElementById("questionHeader").innerHTML = "NO DATA Found";
  } else {
    const filteredSubSem = filteredArr[0];
    document.getElementById("qs").innerHTML = "";
    // for 10Marks questions rendering
    for (let i = 0; i < filteredSubSem.ques10.length; i++) {
      const tenMarkQ = ` <div class="tenMarks">
      <div class="tenMarkQ">
        <p class="question">${filteredSubSem.ques10[i]}</p>
        <div class="flex">
          <img src="./images/five-star.png" alt="" class="star" />
         <button type = "button" class = "question-tag">  
         <i class="fa fa-plus"></i>
         <i class="fa fa-minus"></i>
         </button>
        </div>
    </div>
    <div class="tenFiveMarkA">
      <p class="questionAns">
        <span>Q:</span> <span class = "ques-text">xx</span>
      </p>
      <p class="ans">
        <span>Ans:</span> <span class = "ans-text" >${filteredSubSem.ques10Ans[i]}</span>
      </p>
      <h6>RESOURCES: <span>PDF avilabale</span></h6>
      <div class="download-btns flex">
        <a class="preview">Preview</a>
        <a class="download">Download</a>
      </div>
      <h6>Watch Video Start at: <span class = "youtube-start">14:23</span></h6>
      <div class="solution-img">
        <img
          src="./images/thumbnail.png
        "
          alt="computers ap degree"
        />
      </div>
    </div>
      </div>
      `;
      document.getElementById("qs").innerHTML += tenMarkQ;
    }
     // for 5 marks questions rendering
    for (let i = 0; i < filteredSubSem.ques5.length; i++) {
      const fiveMarkQ = ` <div class="tenMarks">
      <div class="fiveMarkQ">
        <p class="question">${filteredSubSem.ques5[i]}</p>
        <div class="flex">
          <img src="./images/five-star.png" alt="" class="star" />
         <button type = "button" class = "question-tag">  
         <i class="fa fa-plus"></i>
         <i class="fa fa-minus"></i>
         </button>
        </div>
    </div>
    <div class="tenFiveMarkA">
      <p class="questionAns">
        <span>Q:</span> <span class = "ques-text" > hello</span>
      </p>
      <p class="ans">
        <span>Ans:</span> <span class = "ans-text" > hello</span>
      </p>
      <h6>RESOURCES: <span>PDF avilabale</span></h6>
      <div class="download-btns flex">
        <a class="preview">Preview</a>
        <a class="download">Download</a>
      </div>
      <h6>Watch Video Start at: <span class = "youtube-start">14:23</span></h6>
      <div class="solution-img">
        <img
          src="./images/thumbnail.png
        "
          alt="computers ap degree"
        />
      </div>
    </div>
      </div>
      `;
      document.getElementById("qs").innerHTML += fiveMarkQ;
    }
    plusBtn = getAllElement(".question-tag");
    plusBtn.forEach(btn => {
      btn.addEventListener("click",(e)=> {
        const parent = e.currentTarget.parentElement.parentElement.parentElement;
        parent.classList.toggle("show-text")
        console.log(parent)
      })
    })
  }
});

// show btn
