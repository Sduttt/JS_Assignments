//Declarations

let input = document.getElementById("input");
let text = document.querySelector(".copyText")
let rules = document.getElementById("rules")
let start = document.getElementById("start")
let sec = document.getElementById("sec")
let min = document.getElementById("minute")
let green = document.getElementById("green")
let complete = document.getElementById("complete")
let flag = false;
let secCounter = 0;
let minCounter = 0;
let myInterval;

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

complete.addEventListener("click", () => {
    for(i of input.value){
        if(input.value = text.textContent){
            alert("done")
        }

    }
})