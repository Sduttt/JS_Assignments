let start = document.getElementById("start");
let pause = document.getElementById("pause");
let stop = document.getElementById("stop");
let resume = document.getElementById("resume");

let min = document.getElementById("min")
let sec = document.getElementById("sec")
let mSec = document.getElementById("m-sec")

let mSecCounter = 00;
let secCounter = 00;
let minCounter = 00;

start.addEventListener("click", () => {
    let mSecInterval = setInterval(() => {
        if(mSecCounter < 100){
            mSecCounter = mSecCounter + 1;
            if(mSecCounter > 99){
                mSecCounter = 00;
            }
        }
        mSec.textContent = mSecCounter
    }, 10)

    let secInterval = setInterval(() => {
        if(secCounter < 60){
            secCounter = secCounter + 1;
            if(secCounter > 59){
                secCounter = 00;
            }
        }
        sec.textContent = secCounter
    }, 1000)

    let minInterval = setInterval(() => {
        if(minCounter < 60){
            minCounter = minCounter + 1;
            if(minCounter > 59){
                minCounter = 00;
            }
        }
        min.textContent = minCounter
    }, 60000)

    start.style.display = "none"
    stop.style.display ="inline"

    pause.addEventListener("click", () => {
        clearInterval(mSecInterval)
        clearInterval(secInterval)
        clearInterval(minInterval)

        resume.style.display = "inline"
        pause.style.display = "none"
    })

    stop.addEventListener("click", () => {
        clearInterval(mSecInterval)
        clearInterval(secInterval)
        clearInterval(minInterval)
        
        min.textContent = 00;
        sec.textContent = 00;
        mSec.textContent = 00;
    })

    resume.addEventListener("click", () => {
        setInterval(() => {
            if(mSecCounter < 100){
                mSecCounter = mSecCounter + 1;
                if(mSecCounter > 99){
                    mSecCounter = 00;
                }
            }
            mSec.textContent = mSecCounter
        }, 10)
    
        setInterval(() => {
            if(secCounter < 60){
                secCounter = secCounter + 1;
                if(secCounter > 59){
                    secCounter = 00;
                }
            }
            sec.textContent = secCounter
        }, 1000)
    
        setInterval(() => {
            if(minCounter < 60){
                minCounter = minCounter + 1;
                if(minCounter > 59){
                    minCounter = 00;
                }
            }
            min.textContent = minCounter
        }, 60000)
    })
})
pause.addEventListener("click", () => {
    // alert("START the clock first!")
})