let number = Math.floor(Math.random() * 10);
const result = document.querySelector(".result");
const totalGuess = document.getElementById("tguess");
const rightGuess = document.getElementById("rguess");
let tg = 0;
let rg = 0;
totalGuess.innerText = tg;
rightGuess.innerText = rg;


const check = () => {
  const predicted = document.getElementById("guessed").value;
  if(predicted == ""){
    alert("Please enter a number!")
    return;
  }
  tg++;
  if (number == predicted) {
    result.innerHTML = "<h1 style='color:green'>You guessed right!</h1>";
    number = Math.floor(Math.random() * 10);
    rg++;
    console.log(`new ${number}`);
  } else {
    result.innerHTML = "<h1 style='color:red'>Sorry! try again</h1>";
  }
  totalGuess.innerText = tg;
  rightGuess.innerText = rg;
};
