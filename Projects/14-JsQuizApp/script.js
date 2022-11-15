//Question and answer database
const quizData = [
    {
        question: "Which built-in method calls a function for each element in the array?",
        a: "while()",
        b: "loop()",
        c: "forEach()",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which built-in method reverses the order of the elements of an array?",
        a: "changeOrder(order)",
        b: "reverse()",
        c: "sort(order)",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which of the following is a valid type of function javascript supports?",
        a: "named function",
        b: "anonymous function",
        c: "Both the above",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

//Declarations

let qsn = document.getElementById("question")
let ans1 = document.getElementById("a_text")
let ans2 = document.getElementById("b_text")
let ans3 = document.getElementById("c_text")
let ans4 = document.getElementById("d_text")

let submit = document.getElementById("submit")
let ansArr = []

let val = 0;
let ansval;
let myans

let ab;
let nullval = [];
let corAns = [];

//Array of cporrect answers
for(i=0; i<quizData.length; i++){
    corAns.push(quizData[i].correct)
}


//loading the first question
window.addEventListener("load", () => {
    qsn.textContent = quizData[val].question;
    ans1.textContent = quizData[val].a;
    ans2.textContent = quizData[val].b;
    ans3.textContent = quizData[val].c;
    ans4.textContent = quizData[val].d;
})

//submit event
submit.addEventListener("click", () => {
    if(val < quizData.length-1){
        val++;
        ans1.textContent = quizData[val].a;
        ans2.textContent = quizData[val].b;
        ans3.textContent = quizData[val].c;
        ans4.textContent = quizData[val].d;
        qsn.textContent = quizData[val].question;

        myans = document.querySelectorAll(".answer");


        for(i=0; i<myans.length; i++){
            if(myans[i].checked){
                nullval.push(myans[i]);
            }
        }
        if(nullval.length == 0){
            ansArr.push("empty")
        }


        for(i=0; i<myans.length; i++){
            if(myans[i].checked){
                ab= myans[i].getAttribute("id");
                ansArr.push(ab)  
                break;
            }
        }
    } else{
        myans = document.querySelectorAll(".answer");
        for(i=0; i<myans.length; i++){
        if(myans[i].checked){
            ab= myans[i].getAttribute("id");
            ansArr.push(ab)  
        }
    }
    showScore()
    } 


    //Score
    
    function showScore(){
        let val = 0;
        let score = document.querySelector("ul");
        for(i=0; i<corAns.length; i++){
            if (corAns[i] == ansArr[i]){
                val++;
            }
        }
        qsn.innerHTML = "<h1> Your score is</h1>"
        score.innerHTML = val;
        score.style.textAlign="center"
        score.style.fontWeight = "bold"
        score.style.color = "red"
        score.style.fontSize = "50px"
        
        submit.innerText = "Okay!"
        submit.addEventListener("click", () => {
            location.reload()
        })
    }
})


//Theme

let theme = document.getElementById("theme")
theme.addEventListener("change", () => {
    if(theme.value == "dark"){
        document.querySelector("body").style.background = "#758283"
        document.querySelector("body").style.color = "#F5F5F5";
        document.querySelector(".quiz-container").style.background = "#242B2E"
        submit.style.backgroundColor = "#03203C"
    }
    
})