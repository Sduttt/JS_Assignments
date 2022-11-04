const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");
const faqs = [];
const faqans = [];

for(i in faqData){
  let faqDiv = document.createElement("div")
  faqDiv.className = "faq";
  accordianBody.appendChild(faqDiv);

  let faqHead = document.createElement("div")
  faqHead.className = "faq_header"
  faqDiv.appendChild(faqHead)

  let faqQs = document.createElement("h3")
  faqQs.className = "faq_header"
  faqHead.appendChild(faqQs)

  faqs.push(faqData[i].question)

  faqQs.textContent = faqs[i]

  let faqbtn = document.createElement("button")
  faqbtn.className = "show_btn"
  faqbtn.textContent = "+"
  faqHead.appendChild(faqbtn)
}

let faqArr = document.querySelectorAll(".faq");


for(i in faqData){
  faqans.push(faqData[i].answer)
}


for( i =0; i < faqArr.length; i++){
  faqArr[i].appendChild(document.createElement("p"))
}
let para = document.querySelectorAll(".faq p")

for(i in para){
  para[i].className = "hidden"
  para[i].textContent = faqans[i]
}

let btns = document.querySelectorAll(".show_btn")

btns.forEach((element) => {
  element.addEventListener("click", () => {
    let paragraph = element.parentElement.nextElementSibling;
    if(paragraph.style.display == "block"){
      paragraph.style.display = "none"
    }
    else paragraph.style.display = "block"

    if(element.textContent == "-"){
      element.textContent = "+"
    } else element.textContent = "-"
    
  })
})

