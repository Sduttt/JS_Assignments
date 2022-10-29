let compArr = ["Rock", "Paper", "Scissor"]

let rock = document.getElementById("r");
let paper = document.getElementById("p");
let scissor = document.getElementById("s");

var userInput;
var compImp;

let userwin = 0;
let compwin = 0;

let user = document.getElementById("result-user-stat");
let computer = document.getElementById("result-comp-stat");
let winner = document.getElementById("result")



rock.addEventListener("click", () => {
    user.textContent = "User: "
    computer.textContent = "Computer: "
    userInput = "Rock";
    user.textContent = user.textContent + userInput;
    setTimeout(computerInput, 50)
    setTimeout(wincount, 350)
    return userInput, compImp;
})

paper.addEventListener("click", () => {
    user.textContent = "User: "
    computer.textContent = "Computer: "
    userInput = "Paper";
    user.textContent = user.textContent + userInput;
    setTimeout(computerInput, 50)
    setTimeout(wincount, 350)
    return userInput, compImp;
})

scissor.addEventListener("click", () => {
    user.textContent = "User: "
    computer.textContent = "Computer: "
    userInput = "Scissor";
    user.textContent = user.textContent + userInput;
    setTimeout(computerInput, 50)
    setTimeout(wincount, 350)
    return userInput, compImp;
})

function computerInput(){
    let choiceIndex = Math.floor(Math.random()*3);
    compImp = compArr[choiceIndex];
    computer.textContent = computer.textContent + compImp;    
    return compImp;
}



function wincount(){
    // same result
    if(userInput == compImp){
        userwin = userwin;
        compwin = compwin;
        winner.textContent = " Draw!!"
    }
    // rock -- paper
    else if(userInput == "Rock" && compImp == "Paper"){
        userwin = userwin;
        compwin = compwin +1;
        winner.textContent = " Computer!!"
    }
    //rock -- Scissor
    else if(userInput == "Rock" && compImp == "Scissor"){
        userwin = userwin +1;
        compwin = compwin;
        winner.textContent = " User!!"
    }
    //paper -- rock
    else if(userInput == "Paper" && compImp == "Rock"){
        userwin = userwin +1;
        compwin = compwin;
        winner.textContent = " User!!"
    }
    //paper -- Scissor
    else if(userInput == "Paper" && compImp == "Scissor"){
        userwin = userwin;
        compwin = compwin +1;
        winner.textContent = " Computer!!"
    }
    //Scissor -- Rock
    else if(userInput == "Scissor" && compImp == "Rock"){
        userwin = userwin;
        compwin = compwin + 1;
        winner.textContent = " Computer!!"
    }
    //Scissor -- Paper
    else if(userInput == "Scissor" && compImp == "Paper"){
        userwin = userwin +1;
        compwin = compwin;
        winner.textContent = " User!!"
    }


    document.getElementById("userScoreVal").innerText = userwin;
    document.getElementById("compScoreVal").innerText = compwin;
}
