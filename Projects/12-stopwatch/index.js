let start = document.getElementById("start");
let reset = document.getElementById("reset");

let min = document.getElementById("min")
let sec = document.getElementById("sec")
let mSec = document.getElementById("m-sec")

let mSecCounter = 00;
let secCounter = 00;
let minCounter = 00;

let startCount = 0;
let isPause = false;
let flag = false;

let mSecInterval;

start.addEventListener("click", () => {
    startCount++;
    if(startCount%2 ==0){
        isPause = true;
    }
    else{
        isPause = false;
    }
    if(!flag){
        mSecInterval = setInterval(() => {
            if(mSecCounter < 100 && !isPause){
                mSecCounter ++;
                if(mSecCounter > 99){
                    mSecCounter = 00;
                    secCounter++;
                    if(secCounter > 59){
                        secCounter = 00;
                        minCounter++;
                    }
                }
            }
            mSec.textContent = mSecCounter;
            sec.textContent = secCounter;
            min.textContent = minCounter;
    
            if(mSecCounter < 10){
                mSec.textContent = "0" + mSecCounter;
            }
            if(secCounter < 10){
                sec.textContent = "0" + secCounter;
            }
            if(minCounter < 10){
                min.textContent = "0" + minCounter;
            }
            flag = true;
        }, 10)
    }


    if(isPause){
        start.innerText = "START";
    }
    else{
        start.innerText = "STOP";
    }

})


reset.addEventListener("click", () =>  {
    location.reload()
})