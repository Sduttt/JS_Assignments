let result = document.querySelector(".result")
document.querySelector(".btn").addEventListener("click", () => {
    let userInput = document.getElementById("isPalindrome").value;
    let iArr = Array.from(userInput);

    let ipArr = iArr.filter((e) => {
        return e !== " ";
    })
    
    if(ipArr.length > 0){
        result.innerHTML = "The text is a Palindrome"
    } else {
        result.innerHTML = "Enter some alpha-numeric characters."
    }
    for(i=0; i<ipArr.length/2; i++){
        if(ipArr[i] !== ipArr[ipArr.length-1-i]){
            result.innerHTML = "The text is NOT a Palindrome"
            break;
        }
    }
})

document.getElementById("isPalindrome").addEventListener("focus", () => {
    result.innerHTML = "";
})
