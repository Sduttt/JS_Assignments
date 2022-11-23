//Declarations

let input = document.getElementById("input");
let text = document.querySelector(".copyText")
let start = document.getElementById("start")
let sec = document.getElementById("sec")
let min = document.getElementById("minute")
let complete = document.getElementById("complete")
let result = document.getElementById("result")
let flag = false;
let secCounter = 0;
let minCounter = 0;
let myInterval;

//Start button Events

start.addEventListener("click", () => {
    input.disabled = false;

   if(!flag){
        myInterval = setInterval(()=>{
            if(secCounter < 60){
                secCounter++;
            } else {
                secCounter = 0;
                minCounter++;
            }

    
            if(secCounter < 10){
                sec.textContent = "0" + secCounter;
            } else{
                sec.textContent = secCounter;
            }
            if(minCounter < 10){
                min.textContent = "0" + minCounter;
            } else {
                min.textContent = minCounter;
            }
            flag = true;
        }, 1000)
    }

})

//Complete button events

complete.addEventListener("click", () => {
    if(input.value == text.textContent){
        clearInterval(myInterval);
        result.innerText = `Congratulations!! You have successfully completed the task in ${min.innerText} minutes and ${sec.innerText} Seconds`
        result.style.color = "#22DD33"
    } else {
        result.innerText = `Please complete your task or check for errors!`
        result.style.color = "#DD2222"
    }

})